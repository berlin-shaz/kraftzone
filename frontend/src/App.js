<<<<<<< Updated upstream
import React from 'react';
import { Header, Navbar, Hero, We, Services, Process, Reference, Price, Footer, Contact } from './components';
import Kontakt from './components/Contact';

function App() {
  return (
    <>

      <section>
        <Header />
      </section>
      

      <section>
        <Hero />
      </section>

      <section>
        <We />
      </section>

      <section id='leistungen'>
        <Services />
      </section>
      
      <section>
        <Process />
      </section>

      <section>
        <Reference />
      </section>

      <section>
        <Price />
      </section>
      <section>
        <Kontakt />
      </section>

      <section>
        <Footer />
      </section>

    </>
=======
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
>>>>>>> Stashed changes
  );
}

export default App;
