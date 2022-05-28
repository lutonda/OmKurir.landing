import IdiomSelect from "../../Component/IdiomSelect";
import "./Header.scss";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

export default function Head() {
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
                    <a className="page-scroll" href="#home">
                      <FormattedMessage id="app.menu.home" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#features">
                      <FormattedMessage id="app.menu.features" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#about">
                      <FormattedMessage id="app.menu.about" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#howItWork">
                      <FormattedMessage id="app.menu.discover" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#blog">
                      <FormattedMessage id="app.menu.blog" />
                    </a>
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
}
