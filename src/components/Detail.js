import React from "react";

const Detail = ({ activeData }) => {
  return (
    <React.Fragment>
      <p>
        <strong>Manufacturer: </strong>{" "}
        {activeData.extras ? activeData.extras.vehicle_manufacturer : ""}
      </p>
      <p>
        <strong>Model: </strong>
        {activeData.extras ? activeData.extras.vehicle_model : ""}
      </p>
      <p>
        <strong>Fuel: </strong>
        {activeData.extras ? activeData.extras.vehicle_fuel : ""}
      </p>
      <p>
        <strong>Color: </strong>
        {activeData.extras ? activeData.extras.vehicle_color : ""}
      </p>
    </React.Fragment>
  );
};

export default Detail;
