import { FormattedMessage } from "react-intl";

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
              <div className="row">
                <div className="col-md-4">
                  Curated Delivery Expert delivery. Off-the-charts customer
                  service. Choose the delivery solution that’s right for your
                  business.
                </div>
                <div className="col-md-4">
                  Responsive Support You and your customers get text updates
                  every step of the way. And, you can always talk to a real
                  person.
                </div>
                <div className="col-md-4">
                  Guarantee Rates No upcharges. No surprises. Just one
                  reasonable fixed rate.
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
