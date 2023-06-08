import React from "react";
import Person from "../../models/Person";

import Lyndal from "../../../assets/img/Lyndal.png";
import Elya from "../../../assets/img/Richardson,Elya.png";
import Sharon from '../../../assets/img/Sharon.jpg';
import Blank from "../../../assets/img/Blank.png";

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
					name="Elya Richardson"
					title="Worship & Media"
					mobileHeight="mh-610px"
					image={Elya}
					bio="Elya is a part time postgrad student at UTAS and has been blessed to travel to North West Vietnam as part of her project. For the last couple of years she has been the youth worker at Cornerstone Presbyterian Church and loves studying God’s Word at Friday night youth group alongside a great bunch of leaders and youth. <br/><br/>In her spare time Elya has recently started learning how to restore furniture and has been learning lots as she listens to the Revive our Hearts Podcast by Nancy DeMoss Wolgemuth"
				/>
				<Person name="Ngaire McCrindle " title="" mobileHeight="mh-610px" image={Blank} bio="" />
                <Person name="Sharon Corbett" title="" mobileHeight="mh-610px" image={Sharon} bio="Sharon is representing the NW coast on the WWA committee.  She worships at Ulverstone Presbyterian Church and currently serves on the Board as the church treasurer.  Sharon works in administration within the agricultural industry and has, this year, embarked on the challenge and delight of leading a women’s bible study group. <br/><br/>Sharon enjoys driving this wonderful country during her holidays, and has previously circumnavigated the country in her much loved Toyota.  She enjoys board games, jigsaw puzzles, reading and trying out new restaurants with her friends and family.  She has served in ministry in the Philippines during her periods of long service leave." />
                <Person name="Jane Marseveen" title="" mobileHeight="mh-610px" image={Blank} bio="" />
			</div>
		</div>
	</section>
);
