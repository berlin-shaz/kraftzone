
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Header, Main } from "./components";
import HouseCleaning from "./pages/HouseCleaning";

function App() {
  return (
    <section>

      <section>{/*** Header section starts */}
        <Header />
      </section>{/*** Header section ends */}

      <section> {/*** Main body section starts*/}
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/house-cleaning" element={<HouseCleaning />}></Route>
        </Routes>
      </section> {/*** Main body section ends */}

      <section>{/*** Footer section starts */}
        <Footer />
      </section>{/*** Footer section ends */}

    </section>
  );
}

export default App;
