import { useEffect, useState } from 'react';
import SelectBar from './components/SelectBar';
import VehicleBar from './components/VehicleBar';
import useFetch from './helper/customApi';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';


import './App.css';

const planetUrl = 'https://findfalcone.geektrust.com/planets';
const VehicleUrl = 'https://findfalcone.geektrust.com/vehicles';
const tokenUrl = 'https://findfalcone.geektrust.com/token';
const findUrl = 'https://findfalcone.geektrust.com/find';
let distance = 0;

function App() {
  const [planets, setPlanets] = useState([]);
  const { data, error } = useFetch(planetUrl);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);
  const [showResult, setShowResults] = useState({ isShow: false });
  const [reqBody, setReqBody] = useState({
    planet_names: [],
    vehicle_names: []
  });

  console.log('----data---', data);
  console.log('----error---', error);

  // useEffect(() => {
  //   const callApi = async () => {
  //     setLoading(true);
  //     const planetRes = await fetch(planetUrl)
  //       .then(res => res.json())
  //       .catch(err => alert(err));
  //     const vehicleRes = await fetch(VehicleUrl)
  //       .then(res => res.json())
  //       .catch(err => console.log(err));
  //     const tokenRes = await fetch(tokenUrl, { method: 'POST', headers: { Accept: 'application/json' } })
  //       .then(res => res.json())
  //       .catch(err => console.log(err));
  //     console.log('---veh---', vehicleRes);
  //     console.log('---planet---', planetRes);
  //     console.log('---token---', tokenRes);
  //     setPlanets(planetRes);
  //     setVehicles(vehicleRes);
  //     setReqBody(prev => ({
  //       ...prev,
  //       ...tokenRes
  //     }));
  //     setLoading(false);
  //   };
  //   callApi();
  // }, []);

  // const onChangeVehicle = selectedVehicle => {
  //   // console.log('----ve----', vehicle);
  //   const vehicleItem = JSON.parse(selectedVehicle);
  //   const vehicleCount = vehicles.map(each => {
  //     if (vehicleItem.name === each.name && each.total_no > 0) return { ...each, total_no: --each.total_no };
  //     else return each;
  //   });
  //   setVehicles([...vehicleCount]);
  //   let newObj = { vehicle_names: [...reqBody.vehicle_names, vehicleItem.name] };
  //   setReqBody(prev => ({
  //     ...prev,
  //     ...newObj
  //   }));
  //   setTimeTaken(timeTaken + distance / vehicleItem.speed);
  // };
  // const onChangePlanet = selectedPlanet => {
  //   // reqBody.planet_names.push(selectedPlanet);
  //   const planetItem = JSON.parse(selectedPlanet);
  //   distance = planetItem.distance;
  //   if (!reqBody.planet_names.includes(planetItem.name)) {
  //     const updatePlanets = planets.filter(each => each.name !== planetItem.name);
  //     let newObj = { planet_names: [...reqBody.planet_names, planetItem.name] };
  //     setReqBody(prev => ({
  //       ...prev,
  //       ...newObj
  //     }));
  //     setPlanets(updatePlanets);
  //   }
  // };

  // const handleSubmit = async () => {
  //   console.log(reqBody);
  //   const resultRes = await fetch(findUrl, {
  //     method: 'POST',
  //     headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  //     body: JSON.stringify(reqBody)
  //   })
  //     .then(res => res.json())
  //     .catch(err => console.log(err));
  //   console.log(resultRes);
  //   if (resultRes.status === 'success')
  //     setShowResults(prev => ({ ...prev, isShow: true, status: 'success', result: resultRes.planet_name }));
  //   else if (resultRes.status === 'false') setShowResults(prev => ({ ...prev, isShow: true, status: 'false' }));
  //   else console.log(resultRes.error);
  // };

  // const handleReset = () => {
  //   window.location.reload();
  // };

  if (loading) {
    return <div className="loading">Loading ....</div>
  }

  /*  Create /result route and move this code in seperate comp
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
  */

  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
