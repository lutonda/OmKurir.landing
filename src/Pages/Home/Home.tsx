import React from "react";

import {
  About,
  Blog,
  Download,
  Features,
  Footer,
  Header,
  Preloader,
  Order,
  HowItWork,
  Subscribe
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
      <Download />
      <Blog />
      <Subscribe />
      <Footer />
    </>
  );
}
