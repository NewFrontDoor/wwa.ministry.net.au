import React from 'react';

export default () => (
    <div id="in_pricing">
        <div className="container">
            <div className="section_header">
                <h3>Pricing</h3>
            </div>

            <div className="row charts_wrapp">
                {/* Plan Box */}
                <div className="col-sm-4">
                    <div className="plan">
                        <div className="wrapper">
                            <h3>Lite</h3>
                            <div className="price">
                                <span className="dollar">$</span>
                                <span className="qty">35</span>
                                <span className="month">/month</span>
                            </div>
                            <div className="features">
                                <p>
                                    <strong>10</strong>
                                    Shared Projects
                                </p>
                                <p>
                                    <strong>4</strong>
                                    Team Members
                                </p>
                                <p>
                                    <strong>10</strong>
                                    Storage
                                </p>
                            </div>
                            <a className="order" href="pricing.html">ORDER NOW</a>
                        </div>
                    </div>
                </div>
                {/* Plan Box */}
                <div className="col-sm-4 pro">
                    <div className="plan">
                        <div className="wrapper">
                            <img alt="" className="ribbon" src="img/badge.png" />
                            <h3>Pro</h3>
                            <div className="price">
                                <span className="dollar">$</span>
                                <span className="qty">99</span>
                                <span className="month">/month</span>
                            </div>
                            <div className="features">
                                <p>
                                    <strong>10</strong>
                                    Shared Projects
                                </p>
                                <p>
                                    <strong>25</strong>
                                    Team Members
                                </p>
                                <p>
                                    <strong>Unlimited</strong>
                                    Storage
                                </p>
                                <p>
                                    <strong>Plus </strong>
                                    Phone Support
                                </p>
                            </div>
                            <a className="order" href="pricing.html">ORDER NOW</a>
                        </div>
                    </div>
                </div>
                {/* Plan Box */}
                <div className="col-sm-4 standar">
                    <div className="plan">
                        <div className="wrapper">
                            <h3>Standard</h3>
                            <div className="price">
                                <span className="dollar">$</span>
                                <span className="qty">65</span>
                                <span className="month">/month</span>
                            </div>
                            <div className="features">
                                <p>
                                    <strong>10</strong>
                                    Shared Projects
                                </p>
                                <p>
                                    <strong>4</strong>
                                    Team Members
                                </p>
                                <p>
                                    <strong>10</strong>
                                    Storage
                                </p>
                            </div>
                            <a className="order" href="pricing.html">ORDER NOW</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="start">
                <p>Start your free, no-risk, 14 day trial! </p>
                <a href="pricing.html">Start Now!</a>
            </div>
        </div>
    </div>
)