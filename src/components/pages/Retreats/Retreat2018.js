import React, { Component } from 'react';

import _ from 'lodash'
import { decode } from 'he'
import { getTalksByEventID } from '../../../utils/fetchJSON';
import AudioPlayer from 'react-responsive-audio-player';
import '../../../assets/css/audioplayer.css'
import { FaSpinner } from 'react-icons/fa'

import Banner from '../../../assets/img/Retreat2018.png';
import Caitlin from '../../../assets/img/Caitlin Orr.png';

class Sermons extends Component {
    constructor() {
        super();
        this.state = {
            talks: null,
            loading: true
        }
    }

    componentWillMount() {
        var that = this;

        getTalksByEventID('2', function (data) {
            that.setState({ talks: data });
        });
    }


    render() {
        var talks;
        if (!this.state.talks) {
            talks = <FaSpinner />;
        }
        else {
            talks = _.map(this.state.talks, (talk) => {
                return (
                    <div className="talk-container" key={_.uniqueId()}>
                        <div><a href={talk.audio} target="_blank" rel="noreferrer noopener">{talk.node_title ? decode(talk.node_title) : 'Untitled'}</a></div>
                        <div>{talk.passage ? decode(talk.passage) : 'Passage'}</div>
                        <span><AudioPlayer playlist={[{ url: talk.audio }]} controls={['playpause', 'spacer', 'progress']} /></span>

                    </div>
                )
            });
        }

        return (
            <section>
                <div className="text-center banner-container" style={{ marginTop: "-18px", backgroundColor: "#6a8768", marginBottom: "30px" }}>
                    <img src={Banner} alt="" className="img img-responsive page-banner" />
                </div>

                <section className="container">

                    <div className="row col-md-12">
                        <div className="desktop-only">
                            <img src={Caitlin} alt="" className="img img-responsive img-border-20" style={{ marginTop: "0px", float: "right", maxHeight: "180px" }} />
                        </div>
                        <p>
                            In 2018 we looked at what does Bible say about friendship? As Christians, how should we be thinking about friendship?<br />How do we respond biblically when friendship fails or friends hurt us?
                </p><br />




                        <p style={{ marginTop: "0.5em" }}>
                            We were blessed to have Caitlin Orr come and speak. She is passionate about thinking through what it means to be a friend from a biblical perspective and most importantly she is keen to equip women to "do" friendship in a broken world. Caitlin graduated from <a href="https://www.moore.edu.au/" target="_blank" rel="noreferrer noopener">Moore Theological College</a> in 2014 and works as an assistant minister at <a href="https://www.watsonsbayanglican.net/" target="_blank" rel="noreferrer noopener">St Peters Watsons Bay</a>, Sydney where she ministers to the women in her parish.
                </p>
                        <div className="text-center mobile-only">
                            <img src={Caitlin} alt="" className="img img-responsive mobile-image img-border-20" style={{ marginTop: "20px", display: "inline-block", maxHeight: "180px" }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="talks-container col-xs-12">
                            {talks}
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

export default Sermons;