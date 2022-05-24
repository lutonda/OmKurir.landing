import "./Order.scss";

export default function Order() {
  return (
    <>
      <section id="Order" className="features_area pt-35 pb-80 Order">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-7 col-sm-8">
              <div
                className="single_features mt-30 features_2 text-center wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.5s"
              >
                <div className="features_content">
                  <h4 className="features_title text-left">
                    Calculate your Shipping costs
                  </h4>
                  <p className="text-left">
                    Delivery service within the city is suitable for personal
                    shipments. Faster and agile
                  </p>
                  <div className="row" style={{ marginTop: 15 }}>
                    <div className="col-md-4">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Weight (KG)"
                      ></input>
                    </div>
                    <div className="col-md-4">
                      <input
                        className="form-control"
                        placeholder="Pick Up Location"
                      ></input>
                    </div>
                    <div className="col-md-4">
                      <input
                        className="form-control"
                        placeholder="Delivery Location"
                      ></input>
                    </div>
                    <div className="col-md-12" style={{ marginTop: 15 }}>
                      <button
                        className="btn btn-success"
                        type="button"
                        style={{ width: "100%" }}
                      >
                        Check Postage
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-7 col-sm-8">
              <div
                className="single_features mt-30 features_1 text-center wow fadeInUp box-blue"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                <div className="features_content">
                  <h4 className="features_title text-left">Track Delivery</h4>
                  <p className="text-left">
                    Delivery service within the city is suitable for personal
                    shipments. Faster and agile
                  </p>
                  <span>SID CODE: </span>
                  <textarea
                    id="awb-text-area"
                    className="form-control airwaybill-code pt-0"
                    style={{ height: 72 }}
                    placeholder="EM.XXXXXXXXXX-20XXXXXX-X-XXXXXX EM.XXXXXXXXXX-20XXXXXX-X-XXXXXX"
                    name="shipment_code"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
