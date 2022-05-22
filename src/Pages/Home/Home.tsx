import React from "react";

import {
  About,
  Blog,
  Download,
  Features,
  Footer,
  Header,
  Preloader,
  Pricing,
  Video,
  HowItWork
} from "./Seccions/Index";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <Features />
      <About />
      <HowItWork />
      <Pricing />
      <Download />
      <Blog />
      <Footer />
    </>
  );
}
