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
                <h4 className="title">Discover New Experience!</h4>
                <p>
                Improve your business and get much more profitable offers by using OmKurir's business services.
                Upgrade your personal account to OmKurir's business account to get many benefits and a pleasant experience from just sending goods.
                </p>
              </div>
              <a className="main-btn" href="#">
                Discover
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
