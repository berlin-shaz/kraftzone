import React from 'react';
import { Header, Hero, Services, Footer } from './components';

function App() {
  return (
    <div>

      <section>
        <Header />
      </section>
      

      <section>
        <Hero />
      </section>

      <section id='leistungen'>
        <Services />
      </section>
      
      
      <section>
        <Footer />
      </section>

    </>
  );
}

export default App;
