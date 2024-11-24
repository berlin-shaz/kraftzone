import React from "react";
import { Helmet } from "react-helmet-async";

import {
  Hero,
  We,
  Services,
  Process,
  Reference,
  Price,
  Contact,
  Faq,
  ContactForm,
  BerlinMap,
} from "./";
import Features from "./Features";

export default function Main() {
  return (
    <>
      <Helmet>
        <title>KraftZone</title>
        <meta
          name="description"
          content="Die Kraftzone, Dienstleistungen in Berlin und Umgebung, professionelle Entrümpelung, Haushalts- und Geschäftsauflösungen, umweltgerechte Entsorgung."
        ></meta>
        <link rel="canonical" href="/"></link>
      </Helmet>
      <section id="startseite">
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

      <section id="preis">
        <Price />
      </section>

      <section id="kontakt">
        <ContactForm />
      </section>

    </>
  );
}
