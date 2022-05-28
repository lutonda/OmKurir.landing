import { FormattedMessage } from "react-intl";
import "./About.scss";

export default function About() {
  return (
    <section id="about" className="about_area pt-30 pb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-9">
            <div
              className="about_image mt-50 wow fadeInRightBig"
              data-wow-duration="1.3s"
              data-wow-delay="0.5s"
            >
              <img
                className="image"
                src="/assets/images/about.png"
                alt="about"
              />
              <img className="dots" src="/assets/images/dots.svg" alt="dots" />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="about_content mt-45 wow fadeInLeftBig"
              data-wow-duration="1.3s"
              data-wow-delay="0.5s"
            >
              <div className="section_title">
                <h4 className="title">
                  <FormattedMessage id="app.about.title" />
                </h4>
                <p>
                  <FormattedMessage id="app.about.description" />
                </p>
              </div>
              <div className="row single_features mt-30 features_3 text-center wow fadeInUp">
                <div className="col-md-6">
                  <i className="lni lni-ship"></i>
                  <FormattedMessage id="app.about.1" />
                </div>
                <div className="col-md-6">
                  <i className="lni lni-money-protection"></i>
                  <FormattedMessage id="app.about.2" />
                </div>
              </div>
              <a className="main-btn" href="#">
                <FormattedMessage id="app.label.discoverMore" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
