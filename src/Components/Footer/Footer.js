import React from 'react';
import { Link } from 'react-router-dom';


function Footer(){
    return(
        <footer className="spt-90 end-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={`${process.env.PUBLIC_URL}/images/main-logo.png`} alt="menu-icon" />
                    </div>
                    <div className="col-lg-6">
                        <div className="flex-end">
                            <ul className="footer-ul">
                                <li className="footer-li">
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="footer-li">
                                    <Link to="/freelancers">
                                        Freelancers
                                    </Link>
                                </li>
                                <li className="footer-li">
                                    <Link to="/business">
                                        Small Business
                                    </Link>
                                </li>
                                <li className="footer-li">
                                    <Link to="/organizations">
                                        Organizations
                                    </Link>
                                </li>
                                <li className="footer-li">
                                    <Link to="/faqs">
                                        FAQs
                                    </Link>
                                </li>
                                <li className="footer-li">
                                    <Link to="/pricing">
                                        Pricing
                                    </Link>
                                </li>
                                <li className="footer-li">
                                    <Link to="/privacypolicy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="footer-li">
                                    <Link to="/termsofservice">
                                        Terms And Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="white-line"></div>
                    </div>
                </div>
                <div className="row pt-20 pb-20">
                    <div className="col-lg-6">
                        <div className="flex-start">
                            <p className="footer-copyright">
                                Copyright (C) InvoicePoint
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="flex-end">
                            <p className="footer-copyright">
                                All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;