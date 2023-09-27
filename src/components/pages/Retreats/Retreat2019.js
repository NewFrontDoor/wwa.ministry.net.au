import React, { Component } from "react";

import Banner from "../../../assets/img/WWA_2019-2.png";
import Speaker from "../../../assets/img/Kathy Thurston.jpg";
import { FaSpinner } from "react-icons/fa";

import _ from "lodash";
import { decode } from "he";
import { getTalksByEventID } from "../../../utils/fetchJSON";
import AudioPlayer from "react-responsive-audio-player";
import "../../../assets/css/audioplayer.css";

class Retreat2019 extends Component {
	constructor() {
		super();
		this.state = {
			talks: null,
			loading: true
		};
	}

	componentWillMount() {
		var that = this;

		getTalksByEventID("6", function(data) {
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
				<section id="header-img">
					<div className="text-center">
						<div
							className="text-center header-container"
							style={{ backgroundImage: `url('${Banner}')`, marginTop: "-18px", marginBottom: "30px" }}
						>
							<div className="header-info text-center">
								<div>Loving God - Loving Others</div>
								<br />
								<div>6 - 8 September 2019</div>
								<br />
								<div>Camp Clayton, Tasmania</div>
							</div>
						</div>
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
							This year's topic was <em>Loving God - Loving Others</em> and we had an opportunity to grapple with
							questions like: <em>How does God love us? How do we love people in our lives?</em> and{" "}
							<em>What is it that holds us back from loving others as God commands?</em>
						</p>

						<p style={{ marginTop: "4em" }}>
							We were delighted to welcome Kathy Thurston as our main speaker. Kathy and her husband Dave are based in
							Brisbane with their ministry work{" "}
							<a href="https://church2church.org.au/" target="_blank" rel="noopener noreferrer">
								Church2Church
							</a>
							, a role that involves ministering to clergy couples through mentoring and providing additional support
							through great resources and church consultancy.
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

export default Retreat2019;
