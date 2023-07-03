export default function Home() {
  return (
    <>
      <div className="title-container">
        <h1>Finding falcon!</h1>
        <p>Select planets you want to search in</p>
      </div>
      
      {/* {planets && vehicles && (
        <div className="home-container">
          <div className="select-wrap">
            <div className="select-container">
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
      )} */}
      {/* <button
        type="button"
        className="findBtn"
        onClick={handleSubmit}
        disabled={reqBody.planet_names.length === 4 && reqBody.vehicle_names.length === 4 ? false : true}
      >
        Find Falcon
      </button> */}
    </>
  );
};
