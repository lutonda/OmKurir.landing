import Head from "../../../Component/Header";

export default function Header() {
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
                  OmKurir is a logistics service for social commerce
                </h2>
                <p
                  className="wow fadeInLeftBig"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.6s"
                >
                  We make easy for users to send goods using the
                  cash-on-delivery (COD) & cash-and-carry (CAC) pay method
                  without a marketplace
                </p>
                <ul>
                  <li>
                    <a
                      className="main-btn wow fadeInUp"
                      data-wow-duration="1.3s"
                      data-wow-delay="1s"
                      href="#"
                    >
                      Discover More
                    </a>
                  </li>
                  <li>
                    <a
                      className="main-btn main-btn-2 wow fadeInUp"
                      data-wow-duration="1.3s"
                      data-wow-delay="1.4s"
                      href="#download"
                    >
                      Download App
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
            <img src="/assets/images/header_app.png" alt="header App" />
            <img src="/assets/images/dots.svg" alt="dots" className="dots" />
          </div>
        </div>
      </div>
    </section>
  );
}
