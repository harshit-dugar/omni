import React from "react";
import { Header, Hero, Testinomail, Footer,Benefits,House ,Working,Qna } from "../container";
import {About} from "../components"

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Benefits />
      <House />
      <Working />
      {/* <Testinomail />
      <Qna />
      <Footer /> */}
    </div>
  );
}

export default App;