import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import "./ContactUs.scss";
import { Footer, MainHeader as Header } from "../Component";
import ContactForm from "./Sections/ContactForm";
import ContactDetails from "./Sections/ContactDetails";


export default function ConactUs() {
  return (
    <>
      <Header title="app.contactUs.title" subTitle="app.contactUs.description" />
      <div
        id="contactUs"
        className="container-fluid single_features mt-30 features_1  wow fadeInUp"
        data-wow-duration="1.3s"
        data-wow-delay="0.2s"
        style={{backgroundImage:"url(/assets/images/fakemaps.png)", backgroundRepeat: "no-repeat", backgroundSize: 'cover'}}
      >
        <div className="container">
          <div className="row">
            <div className={"col-md-6"}></div>
            <div className="col-md-6">
              <ContactForm/>
              <ContactDetails/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
