import React from "react";
import "./SignIn.scss";
import { Footer, MiniHeader as Header } from "../../Component";
import SingInForm from "./SingInForm";
import { connect } from "react-redux";
import { SingInAction } from "../../../Api/Actions/AuthAction";
import { useNavigate } from "react-router-dom";

const SingIn = ({singIn}:{singIn:any}) => {
  const navigate=useNavigate();
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
            <SingInForm singIn={singIn} navigate={navigate}/>
          </div>
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
    singIn: (userState: any, props:any) => {
      dispatch(SingInAction(userState, props));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SingIn);

