export default function Pricing() {
  return (
    <section id="pricing" className="pricing_area mt-80 pt-75 pb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-25">
              <h4 className="title">Choose a Plan</h4>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam
                nonumy eirmod tempor invidunt ut labore et dolore.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div
              className="single_pricing text-center pricing_color_1 mt-30 wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              <div className="pricing_top_bar">
                <h5 className="pricing_title">Startup</h5>
                <i className="lni lni-coffee-cup"></i>
                <span className="price">$9.00</span>
              </div>
              <div className="pricing_list">
                <ul>
                  <li>24/7 Support</li>
                  <li>Free Update</li>
                  <li>unimited download</li>
                </ul>
              </div>
              <div className="pricing_btn">
                <a href="#" className="main-btn main-btn-2">
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div
              className="single_pricing text-center pricing_active pricing_color_2 mt-30 wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.5s"
            >
              <div className="pricing_top_bar">
                <h5 className="pricing_title">Standard</h5>
                <i className="lni lni-crown"></i>
                <span className="price">$15.00</span>
              </div>
              <div className="pricing_list">
                <ul>
                  <li>24/7 Support</li>
                  <li>Free Update</li>
                  <li>unimited download</li>
                </ul>
              </div>
              <div className="pricing_btn">
                <a href="#" className="main-btn">
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div
              className="single_pricing text-center pricing_color_3 mt-30 wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.8s"
            >
              <div className="pricing_top_bar">
                <h5 className="pricing_title">Premium</h5>
                <i className="lni lni-diamond-alt"></i>
                <span className="price">$20.00</span>
              </div>
              <div className="pricing_list">
                <ul>
                  <li>24/7 Support</li>
                  <li>Free Update</li>
                  <li>unimited download</li>
                </ul>
              </div>
              <div className="pricing_btn">
                <a href="#" className="main-btn main-btn-2">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
