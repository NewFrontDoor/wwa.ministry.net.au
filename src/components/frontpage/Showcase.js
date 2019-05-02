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
                            <a href="#">
                                <img alt="" src="img/service2.png" />
                                <span className="circle">
                                    <span className="plus">&#43;</span>
                                </span>
                            </a>
                        </div>
                        <div className="text">
                            <h6>What is WWA?</h6>
                            <p>One weekend a year, the Presbyterian Church of Tasmania hosts a weekend for all women to gather together for a time of biblical teaching, worshiping together and encouragement.</p>
                        </div>
                    </div>
                    {/* Feature */}
                    <div className="col-sm-4 feature">
                        <div className="img_box">
                            <a href="#">
                                <img alt="" src="img/service1.png" />
                                <span className="circle">
                                    <span className="plus">&#43;</span>
                                </span>
                            </a>
                        </div>
                        <div className="text">
                            <h6>Where & When</h6>
                            <p>Specific details on the event location and times will be announced soon.</p>
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
                            <p>If you are interested in joining us please register on <a href="/Register">this page</a>.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)