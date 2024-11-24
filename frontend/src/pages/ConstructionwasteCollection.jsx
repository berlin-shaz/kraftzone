import React from "react";

import { Header, Services } from "../components";
import {
  ServiceHero,
  ServiceContact,
  BauschuttInfo,
} from "../components/services/";

function ConstructionwasteCollection() {
  return (
    <>
      <section id="startseite"><ServiceHero /></section>
      <BauschuttInfo />
      <section id="kontakt">{<ServiceContact />}</section>
      <section id="leistungen"><Services /></section>
    </>
  );
}

export default ConstructionwasteCollection;
