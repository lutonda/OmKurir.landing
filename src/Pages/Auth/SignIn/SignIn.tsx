import React from "react";
import { FormattedMessage } from "react-intl";
import "./SignIn.scss";
import { Footer, MainHeader as Header } from "../../Component";
import { Link } from "react-router-dom";
import SingInForm from "./SingInForm";

const SingIn = () => {
  return (
    <>
      <Header title="app.footer.careers" subTitle="app.careers.description" />
      <div
        id="signIn"
        className="container single_features mt-30 features_1  wow fadeInUp"
        data-wow-duration="1.3s"
        data-wow-delay="0.2s"
      >
        <div className="col-md-12"></div>
        <div className="col-md-6 mx-auto">
          <div
            className="paylocity job-item wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="1s"
          >
            <SingInForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default SingIn;
