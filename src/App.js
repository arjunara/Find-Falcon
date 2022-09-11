import { useEffect, useState } from 'react';
import SelectBar from './components/SelectBar';
import VehicleBar from './components/VehicleBar';

import './App.css';

const planetUrl = 'https://findfalcone.herokuapp.com/planets';
const VehicleUrl = 'https://findfalcone.herokuapp.com/vehicles';
const tokenUrl = 'https://findfalcone.herokuapp.com/token';
const findUrl = 'https://findfalcone.herokuapp.com/find';
let dis = 0;

function App() {
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);
  const [showResult, setShowResults] = useState({ isShow: false });
  const [reqBody, setReqBody] = useState({
    planet_names: [],
    vehicle_names: []
  });

  useEffect(() => {
    const callApi = async () => {
      setLoading(true);
      const planetRes = await fetch(planetUrl)
        .then(res => res.json())
        .catch(err => console.log(err));
      const vehicleRes = await fetch(VehicleUrl)
        .then(res => res.json())
        .catch(err => console.log(err));
      const tokenRes = await fetch(tokenUrl, { method: 'POST', headers: { Accept: 'application/json' } })
        .then(res => res.json())
        .catch(err => console.log(err));
      console.log('---veh---', vehicleRes);
      console.log('---planet---', planetRes);
      console.log('---token---', tokenRes);
      setPlanets(planetRes);
      setVehicles(vehicleRes);
      setReqBody(prev => ({
        ...prev,
        ...tokenRes
      }));
      setLoading(false);
    };
    callApi();
  }, []);
  const onChangeVehicle = selectedVehicle => {
    // console.log('----ve----', vehicle);
    const vehicleItem = JSON.parse(selectedVehicle);
    const vehicleCount = vehicles.map(each => {
      if (vehicleItem.name === each.name && each.total_no > 0) return { ...each, total_no: --each.total_no };
      else return each;
    });
    setVehicles([...vehicleCount]);
    let newObj = { vehicle_names: [...reqBody.vehicle_names, vehicleItem.name] };
    setReqBody(prev => ({
      ...prev,
      ...newObj
    }));
    setTimeTaken(timeTaken + dis / vehicleItem.speed);
  };
  const onChangePlanet = selectedPlanet => {
    // reqBody.planet_names.push(selectedPlanet);
    const planetItem = JSON.parse(selectedPlanet);
    dis = planetItem.distance;
    if (!reqBody.planet_names.includes(planetItem.name)) {
      const updatePlanets = planets.filter(each => each.name !== planetItem.name);
      let newObj = { planet_names: [...reqBody.planet_names, planetItem.name] };
      setReqBody(prev => ({
        ...prev,
        ...newObj
      }));
      setPlanets(updatePlanets);
    }
  };

  const handleSubmit = async () => {
    console.log(reqBody);
    const resultRes = await fetch(findUrl, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(reqBody)
    })
      .then(res => res.json())
      .catch(err => console.log(err));
    console.log(resultRes);
    if (resultRes.status === 'success')
      setShowResults(prev => ({ ...prev, isShow: true, status: 'success', result: resultRes.planet_name }));
    else if (resultRes.status === 'false') setShowResults(prev => ({ ...prev, isShow: true, status: 'false' }));
    else console.log(resultRes.error);
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="header">
        <div className="nav-bar">
          <ul className="nav-item-container">
            <li>
              <a href="/">Reset</a>
            </li>
            <li>|</li>
            <li>
              <a href="/">GeekTrust Home</a>
            </li>
          </ul>
        </div>
      </div>
      {loading ? (
        <div className="loading">Loading ....</div>
      ) : showResult.isShow ? (
        <div className="result-card">
          <h2>
            {showResult.status === 'success'
              ? 'Success! Congratulations on Finding Falcon King Shah is mighty pleased.'
              : 'Failure! You are unable to Find Falcon King Shah'}
          </h2>
          <p>Time taken : {timeTaken}</p>
          <p>{showResult.status === 'success' && `Planet Found: ${showResult.result}`}</p>
          <button type="button" className="findBtn" onClick={handleReset}>
            Start Again
          </button>
        </div>
      ) : (
        <>
          <div className="title-container">
            <h1>Finding falcon!</h1>
            <p>Select planets you want to search in</p>
          </div>
          {planets && vehicles && (
            <div className="home-container">
              <div className="select-wrap">
                <div className="select-container">
                  {/* {console.log(reqBody.planet_names.length)} */}
                  <SelectBar dropData={planets} onChangePlanet={onChangePlanet} destination={1} />
                  {reqBody.planet_names.length >= 1 && (
                    <VehicleBar vehicleList={vehicles} onChangeVehicle={onChangeVehicle} />
                  )}
                </div>
                <div className="select-container">
                  <SelectBar dropData={planets} onChangePlanet={onChangePlanet} destination={2} />
                  {reqBody.planet_names.length >= 2 && (
                    <VehicleBar vehicleList={vehicles} onChangeVehicle={onChangeVehicle} />
                  )}
                </div>
                <div className="select-container">
                  <SelectBar dropData={planets} onChangePlanet={onChangePlanet} destination={3} />
                  {reqBody.planet_names.length >= 3 && (
                    <VehicleBar vehicleList={vehicles} onChangeVehicle={onChangeVehicle} />
                  )}
                </div>
                <div className="select-container">
                  <SelectBar dropData={planets} onChangePlanet={onChangePlanet} destination={4} />
                  {reqBody.planet_names.length >= 4 && (
                    <VehicleBar vehicleList={vehicles} onChangeVehicle={onChangeVehicle} />
                  )}
                </div>
                <h4>
                  <b>{`Time Taken: ${timeTaken}`}</b>
                </h4>
              </div>
            </div>
          )}
          <button
            type="button"
            className="findBtn"
            onClick={handleSubmit}
            disabled={reqBody.planet_names.length === 4 && reqBody.vehicle_names.length === 4 ? false : true}
          >
            Find Falcon
          </button>
        </>
      )}
    </div>
  );
}

export default App;
