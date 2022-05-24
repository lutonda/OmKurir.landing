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
  Order,
  HowItWork
} from "./Seccions/Index";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <Order />
      <Features />
      <About />
      <HowItWork />
      <Pricing/>
      <Download />
      <Blog />
      <Footer />
    </>
  );
}
