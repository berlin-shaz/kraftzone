import React from "react";
import { useLocation } from "react-router-dom";

import { Header, Services } from "../components";
import {
  ServiceHero,
  ServiceContact,
  RefrigeratorDisposalInfo,
} from "../components/services/";

function RefrigratorDisposal() {
  const param = useLocation();
  const heroImage = param.pathname.split("/").pop();
  return (
    <>
      <section id="startseite"><ServiceHero heroImage={heroImage +".jpg"}/></section>
      <RefrigeratorDisposalInfo />
      <section id="kontakt">{<ServiceContact />}</section>
      <section id="leistungen"><Services /></section>
    </>
  );
}

export default RefrigratorDisposal;
