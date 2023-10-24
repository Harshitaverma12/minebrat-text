import React, { useState } from "react";
import "./index.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import List from "./Components/List";
import Result from "./Components/Result";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* routing  to components*/}
          <Route path="/result" Component={Result} />
          <Route exact path="/" Component={List} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
