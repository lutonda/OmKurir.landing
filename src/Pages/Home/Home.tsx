import React from "react";

import {
  About,
  Blog,
  Download,
  Features,
  Order,
  HowItWork,
} from "./Sections/Index";

import { Preloader, Footer, Subscribe, HomeHeader as Header } from "../Component/index";

export default function Home() {
  return (
    <>
      {/*
      <Preloader />
  */}
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
