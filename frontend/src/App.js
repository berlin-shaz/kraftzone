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
  );
}

export default App;
