import { FormattedMessage } from "react-intl";

export default function Subscribe(){
    return(

            <section id="footer" className="footer_area pt-75 pb-80">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="footer_subscribe text-center">
                                    <h3 className="subscribe_title"><FormattedMessage id="app.subscribe.title" /></h3>
                                    <p><FormattedMessage id="app.subscribe.description" /></p>

                                    <div className="subscribe_form">
                                        <form action="#">
                                            <input type="text" placeholder="Enter Email..."/>
                                            <button className="main-btn"><FormattedMessage id="app.label.subscribe" /></button>
                                        </form>
                                    </div> 
                                </div> 
                                <div className="footer_social text-center mt-60">
                                    <ul>
                                        <li><a href="https://www.facebook.com/omkurir.unaaha.1" target={"_blank"}><span className="lni lni-facebook-filled"></span></a></li>
                                        <li><a href="https://twitter.com/OmKurir2" target={"_blank"}><span className="lni lni-twitter-original"></span></a></li>
                                        <li><a href="https://www.instagram.com/om_kurir/" target={"_blank"}><span className="lni lni-instagram-filled"></span></a></li>
                                        <li><a href="https://www.linkedin.com/company/omkuririndonesia/about/" target={"_blank"}><span className="lni lni-linkedin-original"></span></a></li>
                                    </ul>
                                </div>
                                <div className="footer_copyright text-center mt-55">
                                    <p>Copyright &copy; 2022. Designed and Developed by <a href="#" rel="nofollow">-Omkurir</a></p>
                                </div>
                            </div>
                        </div>
                    </div> 
            </section>

            

    )
}