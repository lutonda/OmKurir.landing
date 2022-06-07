import React, { useState } from "react";
import "./User.scss";
import { Footer, Modal, UserHeader as Header } from "../../Component";

import { connect } from "react-redux";
import { SingInAction, SingOutAction } from "../../../Api/Actions/AuthAction";
import HeaderAddon from "./HeaderAddon";

import Packages from "../../Component/Package";
import Order from "../../Home/Sections/Order";
import CompleteSingOnForm from "../SignOn/CompleteSingOnForm";

const User = (props: any) => {
  const { auth, register, singOut } = props;
  const [update, setUpdate] = useState(!auth.user.isActive)
  return (
    <>
      <Header
        title="app.footer.careers"
        Addon={() => update ? <></> : <HeaderAddon singOut={singOut} auth={auth} setUpdate={setUpdate} />}
        subTitle="app.careers.description"
      />
      {!update ?
        <>
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
        </> : <>
          <div
            id="signIn"
            className="container single_features mt-30 features_1  wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.2s"
          >
            <div className="col-md-9 mx-auto">
              <CompleteSingOnForm />
            </div></div></>}
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
    singOut: (props: any) => {
      dispatch(SingOutAction(props));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
