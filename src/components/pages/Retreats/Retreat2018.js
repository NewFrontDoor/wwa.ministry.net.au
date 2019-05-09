/*eslint-disable*/
import React, { Component } from 'react';

import _ from 'lodash'
import { decode } from 'he'
import { getFromDrupalAPI } from '../../../utils/fetchJSON';
import AudioPlayer from 'react-responsive-audio-player';
import '../../../assets/css/audioplayer.css'

import Banner from '../../../assets/img/Retreat2018.png';

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

        getFromDrupalAPI('wwa_talks_api', function (data) {
            that.setState({ talks: data });
        });
    }


    render() {
        if (!this.state.talks) {
            var talks = <div>Loading, please wait.</div>;
        }
        else {
            var talks = _.map(this.state.talks, (talk) => {
                return (
                    <div className="talk-container col-xs-12" key={_.uniqueId()}>
                        <div><a href={talk.audio} target="_blank" rel="noreferrer noopener">{talk.node_title ? decode(talk.node_title) : 'Untitled'}</a></div>
                        <div>{talk.passage ? decode(talk.passage) : 'Passage'}</div>
                        <span><AudioPlayer playlist={[{ url: talk.audio }]} controls={['playpause', 'spacer', 'progress']} /></span>

                    </div>
                )
            });
        }

        let loadingIcon = null;
        if (!this.state.sermonPages) {
            loadingIcon = <i className="fa fa-spinner"></i>;
        }
        if (this.state.loadingSermons && this.state.sermonsRemaining) {
            loadingIcon = <i className="fa fa-spinner"></i>;
        }

        return (
            <section className="container">
                <div className="text-center">
                    <img src={Banner} alt="" className="img img-responsive page-banner" />
                </div>
                <div className="section_header">
                    <h3>Talks</h3>
                </div>
                <div className="talks-container">
                    {talks}
                </div>
            </section>
        );
    }
}

export default Sermons;