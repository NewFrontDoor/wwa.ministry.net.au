import React from "react";
import Person from "../../models/Person";

import Lyndal from "../../../assets/img/Lyndal.png";
import Elya from "../../../assets/img/Richardson,Elya.png";
import Sharon from "../../../assets/img/Sharon.jpg";
import Ngaire from "../../../assets/img/Ngaire.png";
//import Blank from "../../../assets/img/Blank.png";

export default () => (
	<section className="container">
		<div className="section_header">
			<h3>Meet the Committee</h3>
		</div>

		<div>
			<div className="row col-md-12 row-eq-height" style={{ marginTop: "-20px" }}>
				<Person
					name="Lyndal Jolly"
					title="Communications"
					mobileHeight="mh-610px"
					image={Lyndal}
					bio="Lyndal is married to Dave and is a full-time mum to their 3 young boys. You may have met Lyndal when she used to work for Vision 100 as their event manager. Nowadays you’ll find Lyndal having a chat over delicious coffee, at their family business, Yellow Bernard. <br/><br/>This camp is a highlight of Lyndal’s year as she has a real passion for women of all ages coming together, to spend time drawing closer to God and each other!"
				/>
				<Person
					name="Elya Steel"
					title="Worship & Media"
					mobileHeight="mh-610px"
					image={Elya}
					bio="Elya is a married to Tim, is a mum to a an energetic 1-year old and is a part-time postgrad student. She worships at Soul Pressy Church in Hobart and is currently enjoying reading through Truth for Life devotional with Tim. In her spare time, Elya's recently taken up crocheting - it's very early days of this new hobby so you might like to ask how it's going!<br/><br/>Following the camps hiatus, Elya is excited to be meeting alongside other Christian women at this year's camp, and to be encouraged in God's word."
				/>
				<Person
					name="Ngaire McCrindle "
					title=""
					mobileHeight="mh-610px"
					image={Ngaire}
					bio="Ngaire is retired and is a member of St Andrew’s Pres. Church in Launceston.  That means she does lots of “jobs” mostly using her business skills. Her main job (or joy) is visiting Regis Norwood, formerly a Presbyterian Care home, and running a Bible Study/devotion weekly, and coordinating the Sunday afternoon chapel services.<br/><br/>Ngaire has missed sharing with other Christian women and studying God’s word at WWA and is looking forward to it this year.  As a new hobby she has taken up playing the harp and really enjoys the challenge although playing for a wedding in January 2023 was terrifying!"
				/>
				<Person
					name="Sharon Corbett"
					title=""
					mobileHeight="mh-610px"
					image={Sharon}
					bio="Sharon is representing the NW coast on the WWA committee.  She worships at Ulverstone Presbyterian Church and currently serves on the Board as the church treasurer.  Sharon works in administration within the agricultural industry and has, this year, embarked on the challenge and delight of leading a women’s bible study group. <br/><br/>Sharon enjoys driving this wonderful country during her holidays, and has previously circumnavigated the country in her much loved Toyota.  She enjoys board games, jigsaw puzzles, reading and trying out new restaurants with her friends and family.  She has served in ministry in the Philippines during her periods of long service leave."
				/>
			</div>
		</div>
	</section>
);
