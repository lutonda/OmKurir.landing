import React from "react";
import "./SignIn.scss";
import { Footer, MiniHeader as Header } from "../../Component";
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
