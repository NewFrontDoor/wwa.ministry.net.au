import React from 'react';

export default () => (
    <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle pull-right" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a href="/" className="navbar-brand">
                    <span>Women's Weekend Away</span>
                </a>
            </div>

            <div className="collapse navbar-collapse navbar-ex1-collapse" role="navigation">
                <ul className="nav navbar-nav navbar-right">
                    <li className="active"><a href="/">HOME</a></li>

                    <li className="dropdown">
                        <a href="#" //eslint-disable-line
                            className="dropdown-toggle" data-toggle="dropdown">About Us<b className="caret"></b></a>
                        <ul className="dropdown-menu">
                            <li><a href="/OurMission">Our Mission</a></li>
                            <li><a href="/WhatWeBelieve">What We Believe</a></li>
                            <li><a href="/Committee">Meet the Committee</a></li>
                        </ul>
                    </li>

                    <li><a href="/2019Weekend">2019 Weekend</a></li>
                    <li><a href="/2020Weekend">2020 Weekend</a></li>
                    <li className="dropdown">
                        <a href="#" //eslint-disable-line
                            className="dropdown-toggle" data-toggle="dropdown">Resources<b className="caret"></b></a>
                        <ul className="dropdown-menu">
                            <li><a href="/missions">Missions</a></li>
                            <li><a href="/Worship">Worship</a></li>
                            <li><a href="/2018Weekend">2018 Weekend</a></li>
                        </ul>
                    </li>
                    <li><a href="/Register">Register</a></li>

                </ul>
            </div>
        </div>
    </div>
)