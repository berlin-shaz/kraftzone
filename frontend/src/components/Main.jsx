import React from 'react'

import { Hero, We, Services, Process, Reference, Price, Contact, Faq } from './';
import Features from './Features';

export default function Main() {
  return (
    <>
        <section>
          <Hero />
        </section>

        <section>
          <We />
        </section>

        <section>
          <Features />
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
          <Faq />
        </section>

        <section>
          <Contact />
        </section>        
    </>
  )
}
