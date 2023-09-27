import React from "react";
import WhatIsWWA from "../../assets/img/AboutUs.png";
import Weekend2019 from "../../assets/img/2019 weekend away.png";
import Register from "../../assets/img/Register.png";

export default () => (
	<div id="showcase">
		<div className="container">
			<div className="section_header">{/*<h3></h3>*/}</div>
			<div className="row feature_wrapper">
				{/* Features Row */}
				<div className="features_op1_row">
					{/* Feature */}
					<div className="col-sm-4 feature first">
						<div className="img_box">
							<img alt="" src={WhatIsWWA} />
						</div>
						<div className="text">
							<h6>About Us</h6>
							<p style={{ fontSize: "16px" }}>
								Learn more about <a href="/OurMission">Our Mission</a>, <a href="/WhatWeBelieve">What We Believe</a> and{" "}
								<a href="/Committee">Meet the Committee</a>.
							</p>
						</div>
					</div>
					{/* Feature */}
					<div className="col-sm-4 feature">
						<div className="img_box">
							<a href="/2024Weekend">
								<img alt="" src={Weekend2019} />
								<span className="circle">
									<span className="plus">&#43;</span>
								</span>
							</a>
						</div>
						<div className="text">
							<h6>2024 Weekend Away</h6>
							<p style={{ fontSize: "16px" }}>
								20th - 22nd September at <a href="https://www.tamarvalleyresort.com.au/" target="_blank" rel="noopener noreferrer">Tamar Valley Resort, Launceston</a>.
							</p>
						</div>
					</div>
					{/* Feature */}
					<div className="col-sm-4 feature last">
						<div className="img_box">
							<a href="/2023Weekend">
								<img alt="" src={Register} />
								<span className="circle">
									<span className="plus">&#43;</span>
								</span>
							</a>
						</div>
						<div className="text">
							<h6>2023 Weekend Away</h6>
							<p style={{ fontSize: "16px" }}>
								Missed out on joining us last time - check out the talks <a href="/2023Weekend">here</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
