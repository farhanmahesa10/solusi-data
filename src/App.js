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
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster />
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
