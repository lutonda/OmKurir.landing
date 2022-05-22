import "./HowItWork.scss";


const lines=['Faster to arrive'
,'Support COD & CAC payments'
,'Max 5kg for Sameday & NextDay shipments.'
,'24/7 COD disbursement.'
,'No minimum orders.'
,'Super complete services ranging from small & large shipments, city shipments, domestic to international.'
,'Minimal returns.'
,'Fully support your business needs.']

export default function HowItWork() {
  return (
    <section id="about" className="about-area HowItWork">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="section_title">
              <h4 className="title">Discover New Experience!</h4>
            </div>
            <div className="faq-content mt-45">
              <div className="about-title">
                <h6 className="sub-title">A Little More About Us</h6>
                <h4 className="title">
                  Frequently Asked Questions <br /> About Our Site
                </h4>
              </div>
              <div className="about-accordion">
                <div className="accordion" id="accordionExample">
                    
                    {lines.map((line, i)=>(
                  <div className="card">
                    <div className="card-header" id={"heading_"+i}>
                      <a
                        href="#"
                        data-toggle="collapse"
                        data-target={"#collapse_"+i}
                        aria-expanded="false"
                        aria-controls={"#collapse_"+i}
                        className="collapsed"
                      >
                       {line}
                      </a>
                    </div>
                    <div
                      id={"#collapse_"+i}
                      className="collapse"
                      aria-labelledby={"heading_"+i}
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <p className="text">
                          Morbi vehicula arcu et pellentesque tincidunt. Nunc
                          ligula nulla, lobortis a elementum non, vulputate ut
                          arcu. Aliquam erat volutpat. Nullam lacinia felis.
                        </p>
                      </div>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-image mt-50">
              <img src="assets/images/banner.png" alt="about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
