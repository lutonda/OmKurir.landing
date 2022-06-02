import Head from "./Head";
import { FormattedMessage } from "react-intl";
const HomeHeader = () => {
  return (
    <section className="header_area">
      <Head />

      <div id="home" className="header_hero d-lg-flex align-items-center">
        <img
          className="shape shape-1"
          src="/assets/images/shape-1.svg"
          alt="shape"
        />
        <img
          className="shape shape-2"
          src="/assets/images/shape-2.svg"
          alt="shape"
        />
        <img
          className="shape shape-3"
          src="/assets/images/shape-3.svg"
          alt="shape"
        />

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="header_hero_content mt-45">
                <h2
                  className="header_title wow fadeInLeftBig"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.2s"
                >
                  <FormattedMessage
                    id="app.header.title"
                    values={{ appName: "OmKurir" }}
                  />
                </h2>
                <p
                  className="wow fadeInLeftBig"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.6s"
                >
                  <FormattedMessage id="app.header.description" />
                </p>
                <ul>
                  <li>
                    <a
                      className="main-btn wow fadeInUp"
                      data-wow-duration="1.3s"
                      data-wow-delay="1s"
                      href="#features"
                    >
                      <FormattedMessage id="app.label.discoverMore" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="main-btn main-btn-2 wow fadeInUp"
                      data-wow-duration="1.3s"
                      data-wow-delay="1.4s"
                      href="#download"
                    >
                      <FormattedMessage id="app.label.download" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header_image d-flex align-items-end">
          <div
            className="image wow fadeInRightBig"
            data-wow-duration="1.3s"
            data-wow-delay="1.8s"
          >
            <img
              src="/assets/images/header_app.png"
              alt="header App"
              style={{ width: 400 }}
            />
            <img src="/assets/images/dots.svg" alt="dots" className="dots" />
          </div>
        </div>
      </div>
    </section>
  );
};

const MainHeader = ({
  preTitle = null,
  title,
  subTitle = "",
  Addon = () => <></>,
}: {
  preTitle?: string|null;
  title: string;
  subTitle: string;
  Addon?: any;
}) => {
  return (
    <section className="header_area MainHeader">
      <Head />

      <div id="home" className="header_hero d-lg-flex align-items-center">
        <img
          className="shape shape-1"
          src="/assets/images/shape-1.svg"
          alt="shape"
        />
        <img
          className="shape shape-2"
          src="/assets/images/shape-2.svg"
          alt="shape"
        />
        <img
          className="shape shape-3"
          src="/assets/images/shape-3.svg"
          alt="shape"
        />

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="header_hero_content mt-45">
                <h4>{preTitle ? <FormattedMessage id={preTitle} /> : ""}
                  
                </h4>
                <h1>
                  <FormattedMessage id={title} />
                </h1>
              </div>
              <span style={{ color: "#FFF" }}>
                <FormattedMessage id={subTitle} />
              </span>
              <hr />
              <Addon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MiniHeader = ({
  preTitle = null,
  title,
  subTitle = "",
  Addon = () => <></>,
}: {
  preTitle?: string|null;
  title: string;
  subTitle: string;
  Addon?: any;
}) => {
  return (
    <section className="header_area MiniHeader">
      <Head />

      <div id="home" className="header_hero d-lg-flex align-items-center">
        <img
          className="shape shape-1"
          src="/assets/images/shape-1.svg"
          alt="shape"
        />
        <img
          className="shape shape-2"
          src="/assets/images/shape-2.svg"
          alt="shape"
        />
        <img
          className="shape shape-3"
          src="/assets/images/shape-3.svg"
          alt="shape"
        />
      </div>
    </section>
  );
};
export { HomeHeader, MainHeader, MiniHeader };
