import React, { useState } from "react";
import "./SignOn.scss";
import { Footer, MiniHeader as Header } from "../../Component";
import SingOnForm from "./SingOnForm";
import { connect } from "react-redux";
import { SingOnAction } from "../../../Api/Actions/AuthAction";

const SingOn = (props: any) => {
  
  const { user, register } = props;
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
          <SingOnForm register={register} />
        </div>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return { user: state };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    register: (userState: any, props: any = {}) => {
      dispatch(SingOnAction(userState, props));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SingOn);
