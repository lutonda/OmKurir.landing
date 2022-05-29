
import React from "react";
import { FormattedMessage } from "react-intl";
import "./SignOn.scss";
import { Footer, MainHeader as Header } from "../../Component";
import { Link } from "react-router-dom";

const SingOn = () => {
  return (
    <>
      <Header title="app.footer.careers" subTitle="app.careers.description" />
      <div
        id="signIn"
        className="container single_features mt-30 features_1  wow fadeInUp"
        data-wow-duration="1.3s"
        data-wow-delay="0.2s"
      >
        <div className="col-md-12">
          <p>
            PICKUP provides same day and scheduled delivery for leading
            retailers and commercial businesses across the country offering
            room-of-choice and contactless services. Our delivery team, known as
            PICKUP Delivery Pros, is committed to serving our partners by
            providing exceptional customer experiences. PICKUP Delivery Pros are
            a fully-vetted team of all-around good guys and many of them are
            military veterans and first responders.
          </p>
          <br />
          <p>
            We’re a fast-growing company in the exploding delivery space and
            hiring, developing and retaining the brightest minds is a top
            priority. At PICKUP, we’re focused on making our company a great
            place to work with everything following three simple values: trust,
            transparency and fairness. From our business model to our culture,
            we live our values to the extreme for our employees, partners and
            customers. So if you are a motivated self-starter and team player
            who enjoys a fast-paced environment, PICKUP is the place for you.
            Join our team today!
          </p>
        </div>
        <div className="col-md-8">
          <div
            className="paylocity job-item wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="1s"
          >
            <h4>
              <strong>
                <Link to="/careers/jobdetails/89sd089809">Senior Software Engineer I (Remote)</Link>
              </strong>
            </h4>
            <p>
              OUR TEAMPICKUP’s Senior Software Engineers are talented and smart
              folks who get stuff done. Our engineers are expected to disrupt
              and challenge conventions to deliver value to the business faster,
              better, an...
            </p>
            <div
              style={{
                display: "block",
                width: "100%",
                margin: " 0.5rem 0 3rem",
              }}
            >
              <Link
                className="main-btn wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="1s"
                to="/careers/jobdetails/89sd089809"
              >
                View Job
              </Link>
            </div>
          </div>
        
        </div>
      </div>
      <Footer />
    </>
  );
};
export default SingOn;