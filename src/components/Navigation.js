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
                    <li><a href="/Register">Register</a></li>
                    {/*<li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">PAGES <b className="caret"></b></a>
                        <ul className="dropdown-menu">
                            <li><a href="features.html">Features</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="portfolio-item.html">Portfolio Item</a></li>
                            <li><a href="coming-soon.html">Coming Soon</a></li>
                            <li><a href="sign-in.html">Sign in</a></li>
                            <li><a href="sign-up.html">Sign up</a></li>
                            <li><a href="backgrounds.html">Backgrounds</a></li>
                        </ul>
                    </li>*/}
                </ul>
            </div>
        </div>
    </div>
)