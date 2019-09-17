import React, { Component } from 'react';
import Explore from '../../../assets/img/explore.png';
import Dignity from '../../../assets/img/dignity.png';
import PCT from '../../../assets/img/pct.png';

class Missions extends Component {
    render() {
        return (
            <section className="container">
                <div className="section_header">
                    <h3>Missions</h3>
                </div>
                <p>During our Weekend Away we have the opportunity to hear from a number of different ministries and missions.</p><p>Find out more about the missions that we support and how you can partner with them.</p>
                <br />
                <div className="missions-grid">
                <div>
                    <h4>Explore Tasmania</h4>
                    <img src={Explore} alt="Explore Tasmania" style={{maxHeight: "100px", margin: "auto", paddingBottom: "20px", display: "block"}} />
                    <p>Explore Tasmania are a group of Christians passionate about the outdoors and keen to get people thinking about faith.</p><p>Find out more about them and their upcoming walks at <a href="https://exploretasmania.org.au/">https://exploretasmania.org.au/</a></p>
                </div>
                <div>
                    <h4>Dignity Freedom Network</h4>
                    <img src={Dignity} alt="Dignity Freedom Network" style={{maxHeight: "100px", margin: "auto", paddingBottom: "20px", display: "block"}} />
                    <p>Dignity Freedom Network are a group of Australians and New Zealanders who want to see the marginalised people of India set free through education, healthcare and vocational training.</p><p>Head to <a href="https://dfn.org.au/">https://dfn.org.au/</a> to find out more.</p>
                </div>
                <div>
                    <h4>Presbyterian Care Tasmania</h4>
                        <img src={PCT} alt="Presbyterian Care Tasmania" style={{maxHeight: "100px", margin: "auto", paddingBottom: "20px", display: "block"}} />
                    <p>A mercy ministry of the Presbyterian church of Tasmania.</p><p>Head to <a href="www.prescaretas.org.au">www.prescaretas.org.au</a> to find out more about how you and your church can partner with them.</p>
                </div>
                </div>
            </section>
        );
    }
}

export default Missions;