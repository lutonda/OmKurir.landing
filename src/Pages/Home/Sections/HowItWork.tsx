import { FormattedMessage } from "react-intl";
import "./HowItWork.scss";

const lines = [0,1,2,3,4,5,6,7];

export default function HowItWork() {
  return (
    <section id="howItWork" className="about-area HowItWork">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="section_title">
              <h4 className="title"><FormattedMessage id="app.howItWork.title" /></h4>
            </div>
            <div className="faq-content mt-45">
              <div className="about-title">
                <h6 className="sub-title">A Little More About Us</h6>
                <h4 className="title">
                </h4>
              </div>
              <ul className="list-group">
                {lines.map((i) => (
                  <li className="list-group-item">
                    <i className="lni lni-checkmark-circle"></i> 
                    <FormattedMessage id={"app.howItWork."+i} /></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-5 cover" style={{backgroundImage: "url(../../assets/images/image-1.png)"}}>
            <div className="about-image mt-50">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
