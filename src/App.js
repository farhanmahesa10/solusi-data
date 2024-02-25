import React from "react";
import {
  About,
  CTA,
  Footer,
  GIC,
  Hero,
  HowItWorks,
  Navbar,
  Service,
} from "./components";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Service />
      <CTA />
      <GIC />
      <Footer />
    </>
  );
}

export default App;
