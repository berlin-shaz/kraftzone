
import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header, Main } from "./components";
import {HouseCleaning, CrimeSceneCleaning, BasementClearance,
  KitchenCleaning, KitchenDisposal, OfficeCleaning, RefrigratorDisposal, WashmachineDisposal, WasteCollection,
  Impressum, Datenschutz,
  ConstructionwasteCollection,
  ElectronicDisposal
} from "./pages";
import Inquiry from "./components/unilities/Inquiry";
import GeneralInquiry from "./components/services/GeneralInquiry";

function App() {
  return (
    <BrowserRouter>
    

      <section>{/*** Header section starts */}
        <Header />
      </section>{/*** Header section ends */}

     
      
        <Routes>
          <Route path="/kraftzone" element={<Main />}></Route>
          <Route path="/leistungen/wohnungsauflosung" element={<HouseCleaning />}></Route>
          <Route path="/leistungen/buroauflosung" element={<OfficeCleaning />}></Route>
          <Route path="/leistungen/kuchenentrumpelung" element={<KitchenCleaning />}></Route>
          <Route path="/leistungen/sperrmullabholung" element={<WasteCollection />}></Route>
          <Route path="/leistungen/kellerentrumpelung" element={<BasementClearance />}></Route>
          <Route path="/leistungen/tatortreinigung" element={<CrimeSceneCleaning />}></Route>
          <Route path="/leistungen/kuhlschrankentsorgung" element={<RefrigratorDisposal />}></Route>
          <Route path="/leistungen/waschmaschineentsorgung" element={<WashmachineDisposal />}></Route>
          <Route path="/leistungen/kuchenentsorgung" element={<KitchenDisposal />}></Route>
          <Route path="/leistungen/bauschuttentsorgung" element={<ConstructionwasteCollection />}></Route>
          <Route path="/leistungen/elektroschruttentsorgung" element={<ElectronicDisposal />}></Route>

          <Route path="/impressum" element={<Impressum />}></Route>
          <Route path="/datenschutz" element={<Datenschutz />}></Route>
          <Route path="/anfrage" element={<GeneralInquiry />}></Route>
        </Routes>
        
      

      <section>{/*** Footer section starts */}
        <Footer />
      </section>{/*** Footer section ends */}

  
    </BrowserRouter>
  );
}

export default App;
