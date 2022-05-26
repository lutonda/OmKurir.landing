import { FormattedMessage } from "react-intl";
export default function Features() {
  return (
    <section id="features" className="features_area pt-35 pb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-7 col-sm-8">
            <div
              className="single_features mt-30 features_1 text-center wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              <div className="features_icon">
                <i className="lni lni-cart"></i>
              </div>
              <div className="features_content">
                <h4 className="features_title">
                  <FormattedMessage id="app.service.express.title" />
                </h4>
                <p>
                  <FormattedMessage id="app.service.express.description" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-7 col-sm-8">
            <div
              className="single_features mt-30 features_2 text-center wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.5s"
            >
              <div className="features_icon">
                <i className="lni lni-layers"></i>
              </div>
              <div className="features_content">
                <h4 className="features_title">
                  <FormattedMessage id="app.service.liteExpress.title" />
                </h4>
                <p>
                  <FormattedMessage id="app.service.liteExpress.description" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-7 col-sm-8">
            <div
              className="single_features mt-30 features_3 text-center wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.9s"
            >
              <div className="features_icon">
                <i className="lni lni-calendar"></i>
              </div>
              <div className="features_content">
                <h4 className="features_title">
                  <FormattedMessage id="app.service.sameday.title" />
                </h4>
                <p>
                  <FormattedMessage id="app.service.sameday.description" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-7 col-sm-8">
            <div
              className="single_features mt-30 features_3 text-center wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.9s"
            >
              <div className="features_icon">
                <i className="lni lni-exit-down"></i>
              </div>
              <div className="features_content">
                <h4 className="features_title">
                  <FormattedMessage id="app.service.nextDay.title" />
                </h4>
                <p>
                  <FormattedMessage id="app.service.nextDay.description" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-7 col-sm-8">
            <div
              className="single_features mt-30 features_3 text-center wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.9s"
            >
              <div className="features_icon">
                <i className="lni lni-delivery"></i>
              </div>
              <div className="features_content">
                <h4 className="features_title">
                  <FormattedMessage id="app.service.cargo.title" />
                </h4>
                <p>
                  <FormattedMessage id="app.service.cargo.description" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-7 col-sm-8">
            <div
              className="single_features mt-30 features_3 text-center wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.9s"
            >
              <div className="features_icon">
                <i className="lni lni-car-alt"></i>
              </div>
              <div className="features_content">
                <h4 className="features_title">
                  <FormattedMessage id="app.service.liteCargo.title" />
                </h4>
                <p>
                  <FormattedMessage id="app.service.liteCargo.description" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
