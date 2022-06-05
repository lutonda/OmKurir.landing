import { Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { SingOutAction } from "../../../Api/Actions/AuthAction";

const HeaderAddon = ({ auth, singOut }: { auth: any; singOut: any }) => {
  return (
    <div className="addon col-md-12" style={{ padding: 15, marginTop: 100 }}>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <i
              className="lni lni-user"
              style={{
                padding: 25,
                fontSize: 80,
                background: "#FFF",
                borderRadius: "50%",
                color: "#441e9e",
              }}
            />
          </div>
          <div className="col-md-10" style={{ margin: "3% 0" }}>
            <div className="row">
              <span style={{ color: "#FFF" }}>Hi! {auth.user.email} | </span>
              <Button onClick={()=>singOut({})} style={{ color: "#FFF" }}>
                {" "}
                Sign out
              </Button>
            </div>
            <div className="row">
              <Button type="button" className="btn btn-light">
                <i className="lni lni-tab"></i>
                <FormattedMessage id={"app.label.singOn"} />
              </Button>
              <Button variant="primary" className="main-btn wow fadeInUp">
                <i className="lni lni-list"></i>{" "}
                <FormattedMessage id={"app.label.singOn"} />
              </Button>

              <Button variant="primary" className="btn btn-light">
                <i className="lni lni-control-panel"></i>
                <FormattedMessage id={"app.label.singOn"} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { auth: state };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    singIn: (userState: any, props: any) => {
      //dispatch(SingInAction(userState, props));
    },
    singOut: (userState: any) => {
      dispatch(SingOutAction(userState));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderAddon);
