import { Link } from "react-router-dom";
import "./Footer.scss";
export default function Footer() {
  return (
    <footer role="contentinfo" className="footer-default Footer">
      <section className="section-primary dark">
        <div className="container">
          <div className="row alignwide">
            <div className="col-12 col-lg-2">
              <div className="site-logo">
              <Link className="page-scroll" to="/">
                  <img
                    src="/assets/images/logo/logo_light.png"
                    alt="Logo"
                    className="logo"
                    style={{ height: 60 }}
                  />
                </Link>
              </div>
              <br />
              <br />
            </div>
            <div className="col-12 col-lg-9 offset-lg-1">
              <div className="row">
                <div className="col-12 col-lg-4">
                  <h5 className="menu-title">
                    <Link className="page-scroll" to="/Partners">
                      Partners
                    </Link>
                  </h5>
                  <nav className="footer-partners-menu">
                    <ul id="menu-partners" className="menu">
                      <li
                        id="menu-item-813"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-813"
                      >
                        <Link className="page-scroll" to="/Partners">
                          Partner with Us
                        </Link>
                      </li>
                      <li
                        id="menu-item-4249"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4249"
                      >
                        <Link className="page-scroll" to="/Partners">
                          Our Partners
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <h5 className="menu-title">
                  
                  </h5>
                  
                </div>
                <div className="col-12 col-lg-4">
                  <h5 className="menu-title">
                  <Link className="page-scroll" to="#">
                  <i className="lni lni-lock-alt"></i> 
                      Delivery Pros
                    </Link>
                  </h5>
                  <nav className="footer-good-guys-menu">
                    <ul id="menu-delivery-pros" className="menu">
                      <li
                        id="menu-item-775"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-775"
                      >
                        <Link className="page-scroll" to="#">
                        <i className="lni lni-lock-alt"></i> 
                          Become a Delivery Pro
                        </Link>
                      </li>
                      <li
                        id="menu-item-5010"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5010"
                      >
                        <Link className="page-scroll" to="#">
                        <i className="lni lni-lock-alt"></i> 
                          Sign up Today
                        </Link>
                      </li>
                      <li
                        id="menu-item-793"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-793"
                      >
                        <Link className="page-scroll" to="#">
                        <i className="lni lni-lock-alt"></i> 
                          Delivery Pros FAQs
                        </Link>
                      </li>
                      <li
                        id="menu-item-778"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-778"
                      >
                        <Link className="page-scroll" to="#">
                        <i className="lni lni-lock-alt"></i> 
                          Delivery Pros Testimonials
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <h5 className="menu-title">
                  <Link className="page-scroll" to="#">Our Company</Link>
                  </h5>
                  <nav className="footer-company-menu">
                    <ul id="menu-our-company" className="menu">
                      <li
                        id="menu-item-5053"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5053"
                      >
                        <Link className="page-scroll" to="/aboutus">About</Link>
                      </li>
                      <li
                        id="menu-item-5054"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5054"
                      >
                        <Link className="page-scroll" to="/contactus">
                        Contact Us
                        </Link>
                      </li>
                      <li
                        id="menu-item-6036"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6036"
                      >
                        <Link className="page-scroll" to="/careers">Careers</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-12 col-lg-4">
                  <h5 className="menu-title">Information</h5>
                  <nav className="footer-resources-menu">
                    <ul id="menu-information" className="menu">
                      <li
                        id="menu-item-6037"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6037"
                      >
                        <Link className="page-scroll" to="#">
                        <i className="lni lni-lock-alt"></i> 
                          Resources
                        </Link>
                      </li>
                      <li
                        id="menu-item-6339"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6339"
                      >
                        <Link className="page-scroll" to="#">
                        <i className="lni lni-lock-alt"></i> 
                          Sustainability
                        </Link>
                      </li>
                      <li
                        id="menu-item-5459"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5459"
                      >
                        <Link className="page-scroll" to="#"><i className="lni lni-lock-alt"></i> Cities</Link>
                      </li>
                      <li
                        id="menu-item-817"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-817"
                      >
                        <Link className="page-scroll" to="#"><i className="lni lni-lock-alt"></i> Customer Reviews</Link>
                      </li>
                      <li
                        id="menu-item-818"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-818"
                      >
                        <Link className="page-scroll" to="#"><i className="lni lni-lock-alt"></i> Customer FAQs</Link>
                      </li>
                      <li
                        id="menu-item-750"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-750"
                      >
                        <Link className="page-scroll" to="#"><i className="lni lni-lock-alt"></i> News &amp; Press</Link>
                      </li>
                      <li
                        id="menu-item-5055"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5055"
                      >
                        <Link className="page-scroll" to="#"><i className="lni lni-lock-alt"></i> Videos</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-legal darker">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <span className="copyright-information">
                Copyright &copy 2022 OmKurir. All Rights Reserved.
              </span>
              |<Link className="page-scroll" to="#">Privacy Policy</Link>| <Link className="page-scroll" to="#">Site Map</Link>|
              <Link className="page-scroll" to="#">Terms of Service</Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
