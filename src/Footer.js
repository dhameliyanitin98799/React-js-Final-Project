import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>

            {/*================ start footer Area  =================*/}
            <footer className="footer-area section_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-6 single-footer-widget">
                            <h4>Top Products</h4>
                            <ul>
                                <li><Link>Managed Website</Link></li>
                                <li><Link>Manage Reputation</Link></li>
                                <li><Link>Power Tools</Link></li>
                                <li><Link>Marketing Service</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 single-footer-widget">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link>Jobs</Link></li>
                                <li><Link>Brand Assets</Link></li>
                                <li><Link>Investor Relations</Link></li>
                                <li><Link>Terms of Service</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 single-footer-widget">
                            <h4>Features</h4>
                            <ul>
                                <li><Link>Jobs</Link></li>
                                <li><Link>Brand Assets</Link></li>
                                <li><Link>Investor Relations</Link></li>
                                <li><Link>Terms of Service</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 single-footer-widget">
                            <h4>Resources</h4>
                            <ul>
                                <li><Link>Guides</Link></li>
                                <li><Link>Research</Link></li>
                                <li><Link>Experts</Link></li>
                                <li><Link>Agencies</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 single-footer-widget">
                            <h4>Newsletter</h4>
                            <p>You can trust us. we only send promo offers,</p>
                            <div className="form-wrap" id="mc_embed_signup">
                                <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get" className="form-inline">
                                    <input className="form-control" name="EMAIL" placeholder="Your Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email Address '" required type="email" />
                                    <button className="click-btn btn btn-default">Subscribe</button>
                                    <div style={{ position: 'absolute', left: '-5000px' }}>
                                        <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex={-1} defaultValue type="text" />
                                    </div>
                                    <div className="info" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom row align-items-center">
                        <p className="footer-text m-0 col-lg-8 col-md-12">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <Link to="https://colorlib.com" target="_blank">Colorlib</Link>
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                        <div className="col-lg-4 col-md-12 footer-social">
                            <Link><i className="fa fa-facebook" /></Link>
                            <Link><i className="fa fa-twitter" /></Link>
                            <Link><i className="fa fa-dribbble" /></Link>
                            <Link><i className="fa fa-behance" /></Link>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    )
}

export default Footer
