import React from "react";
import { useLocation } from "react-router-dom";

import { Header, Services } from "../components";
import {
  ServiceHero,
  ServiceContact,
  TatortreinigungInfo,
} from "../components/services/";

function CrimeScenceCleaning() {
  const param = useLocation();
  const heroImage = param.pathname.split("/").pop();
  //console.log(url + ".jpg");

  return (
    <>
      <section id="startseite">
        <ServiceHero 
        heroImage={heroImage + ".jpg"} 
        title="Wir reinigen Tat- & Leichenfundorte" /></section>
      <TatortreinigungInfo />
      <section id="kontakt">{<ServiceContact />}</section>
      <section id="leistungen"><Services /></section>
    </>
  );
}

export default CrimeScenceCleaning;
