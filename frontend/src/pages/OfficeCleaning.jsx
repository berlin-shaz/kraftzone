import React from "react";
import { useLocation } from "react-router-dom";

import { Header, Services } from "../components";
import {
  ServiceHero,
  ServiceContact,
  OfficeCleaningInfo,
} from "../components/services/";

function OfficeCleaning() {
  const param = useLocation();
  const heroImage = param.pathname.split("/").pop();
  return (
    <>
      <section 
      id="startseite"><ServiceHero 
      heroImage={heroImage + ".jpg"}
      title="Wir räumen Ihr Büro in ganz Berlin"
      /></section>
      <OfficeCleaningInfo />
      <section id="kontakt">{<ServiceContact />}</section>
      <section id="leistungen"><Services /></section>
    </>
  );
}

export default OfficeCleaning;
