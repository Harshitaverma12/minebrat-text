import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Result() {
  const location = useLocation();
  //fecting data that is passed from the list component
  const [statedata, setstatedata] = useState(location.state);
  return (
    <div>
      <h1>
        {/* printing the selected details */}
        You have selected {statedata.city},{statedata.state}
      </h1>
    </div>
  );
}

export default Result;
