import IdiomSelect from "../../Component/IdiomSelect";
import "./Header.scss";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import AuthHead from "./AuthHead";

const Head = ({ auth }: { auth: any }) => {
  const { pathname } = useLocation();
  const root = pathname === "/";
  return (
    <div className="header_navbar">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <Link to="/" className="navbar-brand">
                <img
                  src="/assets/images/logo/logo_light.png"
                  alt="Logo"
                  className="logo"
                  style={{ height: 60 }}
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse sub-menu-bar"
                id="navbarSupportedContent"
              >
                <ul id="nav" className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a
                      className="page-scroll"
                      href={(root ? "" : "/") + "#home"}
                    >
                      <FormattedMessage id="app.menu.home" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="page-scroll"
                      href={(root ? "" : "/") + "#features"}
                    >
                      <FormattedMessage id="app.menu.features" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="page-scroll"
                      href={(root ? "" : "/") + "#about"}
                    >
                      <FormattedMessage id="app.menu.about" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="page-scroll"
                      href={(root ? "" : "/") + "#howItWork"}
                    >
                      <FormattedMessage id="app.menu.discover" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="page-scroll"
                      href={(root ? "" : "/") + "#blog"}
                    >
                      <FormattedMessage id="app.menu.blog" />
                    </a>
                  </li>
                  <li className="nav-item">
                    {auth.isLogedIn ?
                      <AuthHead auth={auth} />
                      : (
                        <Link
                          className="main-btn wow fadeInUp"
                          data-wow-duration="1.3s"
                          data-wow-delay="1s"
                          to="/auth"
                          style={{
                            padding: " 0 25px",
                            height: " 35px",
                            lineHeight: "35px",
                          }}
                        >
                          <FormattedMessage id="app.label.singIn" /> {" "}/{" "}
                          <FormattedMessage id="app.label.singOn" />
                        </Link>
                      )}
                  </li>

                  <li className="nav-item">
                    <IdiomSelect />
                  </li>
                </ul>
              </div>
            </nav>
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
    register: (userState: any) => {
      console.log(userState);
    },
  };
};
export default /* SingOn;*/ connect(mapStateToProps, mapDispatchToProps)(Head);
