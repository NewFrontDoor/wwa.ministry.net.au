import React from 'react';
import WhatIsWWA from '../../assets/img/AboutUs.png';
import Weekend2019 from '../../assets/img/2019 weekend away.png';
import Register from '../../assets/img/Register.png';

export default () => (
    <div id="showcase">
        <div className="container">
            <div className="section_header">
                {/*<h3></h3>*/}
            </div>
            <div className="row feature_wrapper">
                {/* Features Row */}
                <div className="features_op1_row">
                    {/* Feature */}
                    <div className="col-sm-4 feature first">
                        <div className="img_box">
                            <img alt="" src={WhatIsWWA} />
                        </div>
                        <div className="text">
                            <h6>About Us</h6>
                            <p style={{ fontSize: "16px" }}>Learn more about <a href="/OurMission">Out Mission</a>, <a href="/WhatWeBelieve">What We Believe</a> and <a href="/Committee">Meet the Committee</a>.</p>
                        </div>
                    </div>
                    {/* Feature */}
                    <div className="col-sm-4 feature">
                        <div className="img_box">
                            <a href="/2019Weekend">
                                <img alt="" src={Weekend2019} />
                                <span className="circle">
                                    <span className="plus">&#43;</span>
                                </span>
                            </a>
                        </div>
                        <div className="text">
                            <h6>2019 Weekend Away</h6>
                            <p style={{ fontSize: "16px" }}>Learn more about this years topic, meet our speakers and check out the program.</p>
                        </div>
                    </div>
                    {/* Feature */}
                    <div className="col-sm-4 feature last">
                        <div className="img_box">
                            <a href="/Register">
                                <img alt="" src={Register} />
                                <span className="circle">
                                    <span className="plus">&#43;</span>
                                </span>
                            </a>
                        </div>
                        <div className="text">
                            <h6>Register</h6>
                            <p style={{ fontSize: "16px" }}>Registrations for our 2019 Weekend Away have now closed. However we hope you can join us next year - <a href="/2020Weekend">find out more here</a></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
