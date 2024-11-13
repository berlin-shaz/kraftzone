import React from 'react'

import {Header, Footer} from '../components';
import {ServiceHero, ServiceContact, HouseCleaningInfo} from '../components/services/';

function HouseCleaning() {
  return (
    <>
    <Header />

    <ServiceHero />
    <HouseCleaningInfo />
    <ServiceContact />
    <Footer />

    </>
  )
}

export default HouseCleaning