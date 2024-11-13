
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Main} from "./components";
import HouseCleaning from "./pages/HouseCleaning";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/house-cleaning" element={<HouseCleaning />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
