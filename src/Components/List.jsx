import React, { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import axios from "axios";
import { Button } from "@mui/material";
import CitiesList from "./CitiesList";
import { useNavigate } from "react-router-dom";

function List() {
  const [states, setstates] = useState([]);
  const [selectedState, setselectedState] = useState(""); //to store selected state
  const [selectedCity, setselectedCity] = useState(""); //to store selected city
  const navigate = useNavigate();
  //fetching data from api of state in array
  useEffect(() => {
    axios
      .get(`https://api.minebrat.com/api/v1/states`)
      .then((response) => {
        setstates(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  //   const handleStateChange = (event) => {
  //     setselectedState(event.target.value);
  //   };

  //submit function
  const handleSubmit = () => {
    if (selectedState && selectedCity) {
      //applying filter to get selected state name
      const data = states.filter((state) => state.stateId == selectedState);
      //passing data to print in result
      navigate(`/result`, {
        state: { state: data[0].stateName, city: selectedCity },
      });
    }
  };

  return (
    <>
      <div style={{ marginTop: "2rem", marginLeft: "2rem" }}>
        Select State and City
      </div>
      <div
        style={{
          display: "flex",
          marginLeft: "2rem",
          marginRight: "2rem",
          marginTop: "2rem",
        }}
      >
        <select onChange={(e) => setselectedState(e.target.value)}>
          <option>Select the state</option>
          {/* mapping through the array of state*/}
          {states.map((state) => (
            <option key={state.stateId} value={state.stateId}>
              {state.stateName}
            </option>
          ))}
        </select>

        {/*conditional rendering: passing stateId to CityList Component when state is getting changed on selecting state */}
        {selectedState && (
          <CitiesList
            stateId={selectedState}
            setselectedCity={setselectedCity}
          />
        )}
        {/* submit button */}
        <Button
          style={{ marginLeft: "2rem" }}
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </>
  );
}

export default List;
