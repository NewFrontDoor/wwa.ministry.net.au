import React, { Component } from 'react';
import styled from 'styled-components'
import Banner from '../../../assets/img/wwa-banner-notext.jpg';
import Speaker from '../../../assets/img/KylieEvans.jpg'

const HeaderText = styled.div`
font-family: bebas-neue, sans-serif;
margin-top: 30px;
color: #fff;
text-shadow: 1px 1px #000;
font-size: 18px;
letter-spacing: 5px;
line-height: 2.32;
font-weight: 300;
`;

const HeaderLine = styled.div`
font-family: 'Seriffic', serif !important;
margin-bottom: 20px;
color: #fff;
text-shadow: 1px 1px #000;
font-size: 2.5em;
line-height: 2;
font-weight: 200;
`;

class Retreat2020 extends Component {
    render() {
        return (
            <section>
                <section id="header-img">
                    <div className="text-center header-container" style={{ 'backgroundImage': `url('${Banner}')`, marginTop: "-18px", marginBottom: "30px" }}>
                        {/*<img alt="" className="img img-responsive slider-img" src={WWA2019} />*/}
                        <div className="header-info text-center">
                            <br />
                            <HeaderText>NEXT WOMEN'S WEEKEND AWAY</HeaderText>
                            <HeaderLine>September 2022</HeaderLine>
                        </div>

                    </div>

                </section>
                <section className="container">
                    <div className="col-md-12">
                        <p>Due to the uncertainty that still continues, regarding large residential gatherings, the WWA committee has decided to <strong>postpone our 2021 weekend away, until 2022</strong>.</p><br />

                        <p>The committee is excited to announce that Kylie Evans has agreed to be our keynote speaker next year, and we are keen to put together a weekend that will be a true comfort, encouragement and strengthening of faith for us all!</p><br />

                        <p>Stay tuned for the date release for our next Women's Weekend Away in September 2022, here on our website or <a href="https://www.facebook.com/WWATasmania" rel="noopener noreferrer" target="_blank">Facebook</a> page.</p>

                        <br />
                        <h3>Meet the Speaker</h3>

                        <h4>Kylie Evans</h4>
                        <div className="text-center mobile-only">
                            <img src={Speaker} alt="" className="img img-responsive mobile-image img-border-20" style={{ display: "inline-block", maxHeight: "250px" }} />
                        </div>

                        <div className="desktop-only">
                            <img src={Speaker} alt="" className="img img-responsive img-border-20" style={{ marginTop: "-20px", float: "right", maxHeight: "250px" }} />
                        </div>
                        <p className="speaker-bio">
                            <p>Kylie has a love of learning, people and beauty. She is married to Peter with four wonderfully diverse children and is a counsellor through the <a href="http://www.dalbyhope.org/">Dalby Hope Centre.</a></p>
                            <p>Kylie discovered after being a Christian for thirty years, that the God she thought she knew was not the God of the Bible, that she only had half the story. She discovered that she had created a god through her life experiences that formed a filter, limiting her relationship with God in understanding his character and attributes, a god in her own image.</p>
                            <p>Kylie enjoys vegetable gardening in cool weather and finding little ways to live a bit differently.</p>
                        </p>
                    </div>
                </section>
            </section>
        );
    }
}

export default Retreat2020;
