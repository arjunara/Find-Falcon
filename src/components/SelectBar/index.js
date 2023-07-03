import { React, memo } from 'react';

const SelectBar = ({ dropData, vehicleList, onChangeVehicle, onChangePlanet, destination }) => {
  // console.log('----props', props)
  // const onChangeOption = e => {
  //   onChangeVehicle(e.target.value);
  // };
  // console.log('select is rendered');
  console.log();
  const selectPlanet = e => {
    onChangePlanet(e.target.value);
  };
  return (
    <div>
      <h5>Destination - {destination}</h5>
      <select onChange={selectPlanet}>
        <option defaultValue hidden>
          --select
        </option>
        {dropData &&
          dropData.map(eachPlant => {
            return (
              <option key={eachPlant.name} value={JSON.stringify(eachPlant)}>
                {eachPlant.name}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default memo(SelectBar);
