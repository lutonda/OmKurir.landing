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
} from "./Seccions/Index";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <Features />
      <About />
      <Video />
      <Pricing />
      <Download />
      <Blog />
      <Footer />
    </>
  );
}
