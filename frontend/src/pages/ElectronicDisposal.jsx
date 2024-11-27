import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { Header, Services } from "../components";
import {
  ServiceHero,
  ServiceContact,
  ElectronicDisposalInfo,
} from "../components/services/";

function ElectronicDisposal() {
  const param = useLocation();
  const heroImage = param.pathname.split("/").pop();
  //console.log(url + ".jpg");

  return (
    <>
      <Helmet>
        <title>Kellerentümpelung | Kraftzone</title>
        <meta property="og:type" content="website" />
        <meta
          name="description" content="Wir bieten professionelle, preiswerte und schnelle Lösungen für jede Art von Haushaltsauflösung in Berlin."/>
        <meta
          name="keywords" content="Kellerentümpelung, Renovierungen, Hausauflösung, Streichen der Wände, bloßen Abholung über Möbelabbau, Demontage, Abriss und Entsorgung"/>
        <meta
          property="og:title" content="Kellerentümpelung | Kraftzone"/>
        <meta
          property="og:description" content="Wohnungseigentümer, Renovierungen, Hausauflösung, Streichen der Wände, bloßen Abholung über Möbelabbau, Demontage, Abriss und Entsorgung"/>
        <meta property="og:image" content="URL-to-your-image.jpg" />
        <meta property="og:url" content="https://www.kraftyzone.de/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta http-equiv="Content-Language" content="de"></meta>
        <link rel="canonical" href="/leistungen/kuechenentruempelung"></link>
      </Helmet>

      <section id="startseite">
        <ServiceHero
          heroImage={heroImage + ".avif"}
          title="Wir entrümpeln Ihren Keller"
        />
      </section>
      <ElectronicDisposalInfo />
      <section id="kontakt">{<ServiceContact />}</section>
      <section id="leistungen">
        <Services />
      </section>
    </>
  );
}

export default ElectronicDisposal;
