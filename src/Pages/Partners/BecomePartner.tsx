import React from "react";
import { FormattedMessage } from "react-intl";

import { Footer, MainHeader as Header } from "../Component";
import PartnetForm from "./Component/PartnerForm";


export default function BecomePartner() {
  return (
    <>
      {/*
      <Preloader />
  */}
      <Header
        title={"Become Our Business Partners"}
        subTitle={"confirm it"}
      />
      <div className="container">
        <div className="row">
          <PartnetForm />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
}
