import "./Footer.scss";
export default function Footer() {
  return (
    <footer role="contentinfo" className="footer-default Footer">
      
      <section className="section-legal darker">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <span className="copyright-information">
                Copyright &copy 2022 OmKurir. All Rights Reserved.
              </span>
              |<a href="#">Privacy Policy</a>| <a href="#">Site Map</a>|
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
