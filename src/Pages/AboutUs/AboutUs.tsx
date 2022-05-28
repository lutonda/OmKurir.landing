import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import "./AboutUs.scss";
import { Footer, MainHeader as Header } from "../Component";

export default function AboutUs() {
  return (
    <>
      <Header title="app.footer.aboutUs" subTitle="app.header.description" />
      <div
        id="aboutUs"
        className="container single_features mt-30 features_1  wow fadeInUp"
        data-wow-duration="1.3s"
        data-wow-delay="0.2s"
      >
        <div className="col-md-8 mx-auto text-center">
          <img
            src={"/assets/images/logo/logo-main.png"}
            style={{ width: 400 }}
          />
          <p>
            <FormattedMessage id="app.aboutus.text.0" />
          </p>
        </div>
        <div
          className="row"
          style={{ backgroundImage: "url(/assets/images/image-2.png)" }}
        >
          <div className="row">
            <div className="col-md-7">
              <p
                className="first-p   wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                <FormattedMessage id="app.aboutus.text.1" />
              </p>
            </div>
            <div className={"col-md-5"}></div>
          </div>
          <div className="row">
            <div className={"col-md-5"}></div>
            <div className="col-md-7">
              <p
                className="second-p  wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                <FormattedMessage id="app.aboutus.text.2" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
