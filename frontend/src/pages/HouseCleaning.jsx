import React from "react";
import { useLocation } from "react-router-dom";

import { Header, Services } from "../components";
import {
  ServiceHero,
  ServiceContact,
  HouseCleaningInfo,
} from "../components/services/";

function HouseCleaning() {
  const param = useLocation();
  const heroImage = param.pathname.split("/").pop();
  //console.log(url + ".jpg");

  return (
    <>
      <section id="startseite">
        <ServiceHero 
        heroImage={heroImage + ".jpg"} 
        title="Wohnungsauflösung" /></section>
      <HouseCleaningInfo />
      <section id="kontakt">{<ServiceContact />}</section>
      <section id="leistungen"><Services /></section>
    </>
  );
}

export default HouseCleaning;
