import { Link } from "react-router-dom";
import IdiomSelect from "./IdiomSelect";

export default function Header() {
  return (
    <div className="header_navbar">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="#">
                <img
                  src="/assets/images/logo/logo_light.png"
                  alt="Logo"
                  className="logo"
                  style={{ height: 60 }}
                />
              </a>
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
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#features">
                      Feature
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#pricing">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#blog">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                  <IdiomSelect/>
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
