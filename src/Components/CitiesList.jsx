import React, { useState, useEffect } from "react";
import axios from "axios";

function CitisList({ stateId, setselectedCity }) {
  const [cities, setcities] = useState([]);

  //fetching cities name when any state is selected
  useEffect(() => {
    axios
      .get(`http://api.minebrat.com/api/v1/states/cities/${stateId}`)
      .then((response) => setcities(response.data))
      .catch((error) => console.log(error));
  }, [stateId]);

  return (
    <>
      <div style={{ display: "flex", marginLeft: "2rem" }}>
        <select onChange={(e) => setselectedCity(e.target.value)}>
          <option value="">Select City</option>
          {/* mapping through the city api */}
          {cities.map((city) => (
            <option key={city.cityId} value={city.cityName}>
              {city.cityName}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default CitisList;
