import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import { Footer, MainHeader as Header } from "../Component";

const BecomePartner = () => (
  <Link
    className="main-btn wow fadeInUp"
    data-wow-duration="1.3s"
    data-wow-delay="1s"
    to="/partners/become"
  >
    <FormattedMessage id="app.label.becomePartener" />
  </Link>
);

export default function Partners() {
  return (
    <>
      {/*
      <Preloader />
  */}
      <Header
        title={"Our Partners"}
        subTitle={"confirm it"}
        Addon={BecomePartner}
      />
      <div className="container">
        <div className="row">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((x) => (
            <div className="col-md-3">
              <img src={"/assets/images/partners/" + x + ".jpg"} />
            </div>
          ))}
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
