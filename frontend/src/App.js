
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
   Main
} from "./components";
import Service1 from "./pages/Service1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/service1" element={<Service1 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
