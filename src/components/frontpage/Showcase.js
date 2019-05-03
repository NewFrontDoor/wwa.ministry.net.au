/*eslint-disable */
import React from 'react';

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
                            <img alt="" src="img/service2.png" />
                        </div>
                        <div className="text">
                            <h6>What is WWA?</h6>
                            <p>Women's Weekend Away is a weekend retreat for women to gather together for a time of biblical teaching, worship and friendship.</p>
                        </div>
                    </div>
                    {/* Feature */}
                    <div className="col-sm-4 feature">
                        <div className="img_box">
                            <a href="/2019Retreat">
                                <img alt="" src="img/service1.png" />
                                <span className="circle">
                                    <span className="plus">&#43;</span>
                                </span>
                            </a>
                        </div>
                        <div className="text">
                            <h6>About Our 2019 Retreat</h6>
                            <p>Learn more about this years topic, meet our speakers and check out the program.</p>
                        </div>
                    </div>
                    {/* Feature */}
                    <div className="col-sm-4 feature last">
                        <div className="img_box">
                            <a href="/Register">
                                <img alt="" src="img/service3.png" />
                                <span className="circle">
                                    <span className="plus">&#43;</span>
                                </span>
                            </a>
                        </div>
                        <div className="text">
                            <h6>Register</h6>
                            <p>Don't miss out - <a href="/Register">register now</a> to secure your spot.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)