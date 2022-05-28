import { FormattedMessage } from "react-intl";

export default function Blog() {
  return (
    <section id="blog" className="blog_area pt-80 pb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-25">
              <h4 className="title"><FormattedMessage id="app.blog.title" /></h4>
              <p>
              <FormattedMessage id="app.blog.description" />
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8">
            <div
              className="single_blog blog_1 mt-30 wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              <div className="blog_image">
                <img src="/assets/images/blog-1.jpg" alt="blog" />
              </div>
              <div className="blog_content">
                <div className="blog_meta d-flex justify-content-between">
                  <div className="meta_date">
                    <span>20 December, 2023</span>
                  </div>
                  <div className="meta_like">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="lni lni-comments-alt"></i> 20
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni lni-heart"></i> 15
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="blog_title">
                  <a href="#">Unlimited featrues with free updates.</a>
                </h4>
                <a href="#" className="main-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8">
            <div
              className="single_blog blog_2 mt-30 wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.5s"
            >
              <div className="blog_image">
                <img src="/assets/images/blog-2.jpg" alt="blog" />
              </div>
              <div className="blog_content">
                <div className="blog_meta d-flex justify-content-between">
                  <div className="meta_date">
                    <span>20 December, 2023</span>
                  </div>
                  <div className="meta_like">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="lni lni-comments-alt"></i> 20
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni lni-heart"></i> 15
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="blog_title">
                  <a href="#">Easy to use and customize the App.</a>
                </h4>
                <a href="#" className="main-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8">
            <div
              className="single_blog blog_3 mt-30 wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.8s"
            >
              <div className="blog_image">
                <img src="/assets/images/blog-3.jpg" alt="blog" />
              </div>
              <div className="blog_content">
                <div className="blog_meta d-flex justify-content-between">
                  <div className="meta_date">
                    <span>20 December, 2023</span>
                  </div>
                  <div className="meta_like">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="lni lni-comments-alt"></i> 20
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni lni-heart"></i> 15
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="blog_title">
                  <a href="#">Super fast and strong security.</a>
                </h4>
                <a href="#" className="main-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
