import React, { Component } from "react";

import Banner from "../../../assets/img/WWF2023_facebook-upscale.jpeg";
import Speaker from "../../../assets/img/Carmelina.jpeg";
import { FaSpinner } from "react-icons/fa";

import _ from "lodash";
import { decode } from "he";
import { getTalksByEventID } from "../../../utils/fetchJSON";
import AudioPlayer from "react-responsive-audio-player";
import "../../../assets/css/audioplayer.css";
import styled from "styled-components";

const BannerContainer = styled.div`
	max-height: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
	img {
		display: block;
		height: auto;
		width: auto;
		max-height: 500px;
	}
`;

class Retreat2023 extends Component {
	constructor() {
		super();
		this.state = {
			talks: null,
			loading: true
		};
	}

	componentWillMount() {
		var that = this;

		getTalksByEventID("10", function(data) {
			that.setState({ talks: data });
		});
	}

	render() {
		var talks;
		if (this.state.talks === null) {
			talks = <FaSpinner />;
		} else if (this.state.talks.length === 0) {
			talks = (
				<div>
					<em>Talks to be added soon</em>
				</div>
			);
		} else {
			talks = _.map(this.state.talks, (talk) => {
				return (
					<div className="talk-container" key={_.uniqueId()}>
						<div>
							<a href={talk.audio} target="_blank" rel="noreferrer noopener">
								{talk.node_title ? decode(talk.node_title) : "Untitled"}
							</a>
						</div>
						<div>{talk.passage ? decode(talk.passage) : "Passage"}</div>
						<span>
							<AudioPlayer playlist={[{ url: talk.audio }]} controls={["playpause", "spacer", "progress"]} />
						</span>
					</div>
				);
			});
		}

		return (
			<section>
				<section id="">
					<div className="text-center">
						<BannerContainer>
							<img src={Banner} alt="" />
						</BannerContainer>
					</div>
				</section>
				<section className="container">
					<div className="row col-xs-12">
						<div className="desktop-only">
							<img
								src={Speaker}
								alt=""
								className="img img-responsive img-border-20"
								style={{ marginTop: "0px", float: "right", maxHeight: "180px" }}
							/>
						</div>
						<p>
							This year's topic was <em>Waiting for the Day</em>. The book of 2 Thessalonians is just as relevant today
							as it was when it was written in the first century. The apostle Paul teaches us how we should live and
							work as we wait for Jesus to come back. We learnt more about what will happen when Jesus comes back and
							the practical impact this has on our day-to-day life.
						</p>

						<p style={{ marginTop: "4em" }}>
							This year we welcomed Carmelina Read as our speaker. Carmi and her husband Jeff minister together at
							Chatswood Presbyterian Church in Sydney. She is the Dean of Women at{" "}
							<a href="https://christcollege.edu.au/" target="_blank" rel="noopener noreferrer">
								Christ College
							</a>{" "}
							where she runs the Ministry Training for Women course and heads up the pastoral care of female students
							and candidates wives. In 2023 she also started a new role as a police chaplain at her local station.
						</p>
						<div className="text-center mobile-only">
							<img
								src={Speaker}
								alt=""
								className="img img-responsive mobile-image img-border-20"
								style={{ marginTop: "20px", display: "inline-block", maxHeight: "180px" }}
							/>
						</div>
					</div>
					<div className="row">
						<div className="talks-container col-xs-12">{talks}</div>
					</div>
				</section>
			</section>
		);
	}
}

export default Retreat2023;
