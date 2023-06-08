import React, { Component } from "react";
import sliderimg from "../../../assets/img/WWF2023_facebook-upscale.jpeg";

class Retreat2020 extends Component {
	render() {
		return (
			<section>
				<section>
					<div className="text-center">
						<img alt="" className="img img-responsive slider-img" src={sliderimg} />
					</div>
				</section>
				<section className="container" style={{ marginTop: "30px" }}>
					<div className="col-md-12">
						<p>More details coming soon.</p>

						<br />
						{/* <h3>Meet the Speaker</h3>

						<h4>Kylie Evans</h4>
						<div className="text-center mobile-only">
							<img
								src={Speaker}
								alt=""
								className="img img-responsive mobile-image img-border-20"
								style={{ display: "inline-block", maxHeight: "250px" }}
							/>
						</div>

						<div className="desktop-only">
							<img
								src={Speaker}
								alt=""
								className="img img-responsive img-border-20"
								style={{ marginTop: "-20px", float: "right", maxHeight: "250px" }}
							/>
						</div>
						<p className="speaker-bio">
							<p>
								Kylie has a love of learning, people and beauty. She is married to Peter with four wonderfully diverse
								children and is a counsellor through the <a href="http://www.dalbyhope.org/">Dalby Hope Centre.</a>
							</p>
							<p>
								Kylie discovered after being a Christian for thirty years, that the God she thought she knew was not the
								God of the Bible, that she only had half the story. She discovered that she had created a god through
								her life experiences that formed a filter, limiting her relationship with God in understanding his
								character and attributes, a god in her own image.
							</p>
							<p>Kylie enjoys vegetable gardening in cool weather and finding little ways to live a bit differently.</p>
						</p> */}
					</div>
				</section>
			</section>
		);
	}
}

export default Retreat2020;
