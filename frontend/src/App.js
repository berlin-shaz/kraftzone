import React from 'react';
import { Header, Navbar, Hero, We, Services, Process, Reference, Price, Footer } from './components';

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
        <Footer />
      </section>

    </div>
  );
}

export default App;
