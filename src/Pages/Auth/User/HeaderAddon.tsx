import { Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { SingOutAction } from "../../../Api/Actions/AuthAction";

const HeaderAddon = (props: any) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { auth, singOut, setUpdate } = props
  const { addToast } = useToasts();
  const menuButtonClassName = (currentPath: string) => (pathname == currentPath ? 'main-btn' : 'btn btn-light') + ' wow-fadeInUp';
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
              <span style={{ color: "#FFF" }}><FormattedMessage id="app.label.hi" />! {auth.user.firstName} {auth.user.lastName} | </span>
              <Button onClick={() => singOut({ navigate, addToast })} className={'btn btn-link'} style={{
                color: "#FFF", background: 'none',
                border: 'none',
                padding: '1px 5px'
              }}>
                {" "}
                <FormattedMessage id="app.label.singOut" />
              </Button>
            </div>
            <div className="row">
              <Link to="/mykurir" className={menuButtonClassName('/mykurir')}>
                <i className="lni lni-tab"></i>{" "}
                <FormattedMessage id={"app.label.start"} />
              </Link>
              <Link to="/mykurir/orders" className={menuButtonClassName('/mykurir/orders')}>
                <i className="lni lni-list"></i>{" "}
                <FormattedMessage id={"app.label.orders"} />
              </Link>

              <Link to="/mykurir/update" className={menuButtonClassName('/mykurir/update')}>
                <i className="lni lni-control-panel"></i>{" "}
                <FormattedMessage id={"app.label.settings"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAddon;
