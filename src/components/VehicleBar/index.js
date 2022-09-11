import React from 'react';
import './index.css';

const VehicleBar = ({ onChangeVehicle, vehicleList }) => {
  const onChangeOption = e => {
    onChangeVehicle(e.target.value);
  };
  return (
    <div className="vehicle-container">
      {/* {console.log('----render----', vehicleList)} */}
      {vehicleList &&
        vehicleList.map(eachVehicle => {
          return (
            <div key={eachVehicle.name}>
              <input
                type="radio"
                value={JSON.stringify(eachVehicle)}
                name="vehicle"
                onChange={onChangeOption}
                disabled={eachVehicle.total_no === 0 ? true : false}
              />
              <label className="label" disabled={eachVehicle.total_no === 0 ? true : false}>
                {eachVehicle.name} ({eachVehicle.total_no})
              </label>
            </div>
          );
        })}
    </div>
  );
};

export default VehicleBar;
