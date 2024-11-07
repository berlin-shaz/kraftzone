import React from 'react'

import {Header, Hero, We, Services, Process, Reference, Price, Footer, Contact } from './';

export default function Main() {
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

        <section id="leistungen">
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
          <Contact />
        </section>

        <section>
          <Footer />
        </section>
        
    </>
  )
}
