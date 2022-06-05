import React from "react";
import "./User.scss";
import { Footer, UserHeader as Header } from "../../Component";

import { connect } from "react-redux";
import { SingInAction } from "../../../Api/Actions/AuthAction";
import HeaderAddon from "./HeaderAddon";

import Packages from "../../Component/Package";
import Order from "../../Home/Sections/Order";

const User = (props: any) => {
  const { auth, register } = props;

  return (
    <>
      <Header
        title="app.footer.careers"
        Addon={HeaderAddon}
        subTitle="app.careers.description"
      />
      <Order />
      <div
        id="signIn"
        className="container single_features mt-30 features_1  wow fadeInUp"
        data-wow-duration="1.3s"
        data-wow-delay="0.2s"
      >
        <div className="col-md-9 mx-auto">
        
          <div
            className="paylocity job-item wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="1s"
          >
              
            <Packages />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return { auth: state };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    singIn: (userState: any, props: any) => {
      dispatch(SingInAction(userState, props));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
