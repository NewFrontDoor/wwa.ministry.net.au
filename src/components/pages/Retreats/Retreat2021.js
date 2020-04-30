import React, { Component } from 'react';

import Banner from '../../../assets/img/WWA_2019-2.png';
import Speaker from '../../../assets/img/KylieEvans.jpg'

class Retreat2020 extends Component {
    render() {
        return (
            <section>
                <section id="header-img">
                    <div className="text-center header-container" style={{ 'backgroundImage': `url('${Banner}')`, marginTop: "-18px", marginBottom: "30px" }}>
                        {/*<img alt="" className="img img-responsive slider-img" src={WWA2019} />*/}
                        <div className="header-info text-center">
                            <br />
                            <div style={{ fontSize: "36px", lineHeight: "50px" }}>2021 Weekend Away</div><br />
                        </div>

                    </div>

                </section>
                <section className="container">
                    <div className="col-md-12">
                        <h3>Save the date!</h3>
                        <h4>Women's Weekend Away 2021 will be from the 10th - 12th September at  <a href="https://www.google.com/maps/place/Camp+Clayton/@-41.160476,146.222076,3740m/data=!3m1!1e3!4m5!3m4!1s0x0:0x4acb99ea69ccacc0!8m2!3d-41.160476!4d146.222076">Camp Clayton</a>.</h4>
                        <p>We’re looking forward to welcoming Kylie Evans to our Weekend Away! More details about the topic coming soon</p>
                        <br />
                        <h3>Meet the Speaker</h3>

                        <h4>Kylie Evans</h4>
                        <div className="text-center mobile-only">
                            <img src={Speaker} alt="" className="img img-responsive mobile-image img-border-20" style={{ display: "inline-block", maxHeight: "250px" }} />
                        </div>

                        <div className="desktop-only">
                            <img src={Speaker} alt="" className="img img-responsive img-border-20" style={{ float: "right", maxHeight: "250px" }} />
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