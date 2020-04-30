import React from 'react';
import Person from '../../models/Person';

//import Rachel from '../../../assets/img/Bain,Rachel.png';
//import Lyndal from '../../../assets/img/Jolly,Lyndal.png';
//import Naomi from '../../../assets/img/Petrie,Naomi.png';
import Naomi from '../../../assets/img/Naomi.png';
import Lyndal from '../../../assets/img/Lyndal.png';
import Rachel from '../../../assets/img/Rachel.png';


import Libby from '../../../assets/img/Dilger,Libby.png';
import Elya from '../../../assets/img/Richardson,Elya.png';
//import Jane from '../../../assets/img/Maarseveen,Jane.png';


//import Blank from '../../../assets/img/Blank.png'


export default () => (
    <section className="container">
        <div className="section_header">
            <h3>Meet the Committee</h3>
        </div>

        <div>
            <div className="row col-md-12 row-eq-height" style={{ marginTop: "-20px" }}>
                <Person name="Rachel Bain" title="Coordinator" image={Rachel} mobileHeight="mh-620px" bio="Rachel ministers with her husband Alistair at St John’s Presbyterian Church in Hobart, and together they have 3 children aged 16, 14 and 12. Rachel is passionate about authentic friendships and intentional engagement within her community and loves her part time job as Prep-1 teacher at the local public school. <br/><br/>In her spare time Rachel thoroughly enjoys the chance to walk, garden, connect with nature and be by the ocean. Lately she has been reading Tim Chester’s new book Enjoying God and The Frog and The Fish by Chris Parker. " />

                <Person name="Libby Dilger" title="Admin" image={Libby} mobileHeight="mh-610px" bio="The last couple of years have been an adjustment for Libby and her husband Andrew as their 4 daughters begin leaving the nest to get married or for study.  Libby works one day per week as a receptionist for a medical practitioner, and then fills the remainder of her week undertaking various tasks for Cornerstone Presbyterian Church. <br/><br/>Libby enjoys coffee, completing crosswords with her daughters, playing scrabble and chess, and regularly includes cycling and swimming in her morning routine." />

                <Person name="Elya Richardson" title="Worship & Media" mobileHeight="mh-610px" image={Elya} bio="Elya is a part time postgrad student at UTAS and has been blessed to travel to North West Vietnam as part of her project. For the last couple of years she has been the youth worker at Cornerstone Presbyterian Church and loves studying God’s Word at Friday night youth group alongside a great bunch of leaders and youth. <br/><br/>In her spare time Elya has recently started learning how to restore furniture and has been learning lots as she listens to the Revive our Hearts Podcast by Nancy DeMoss Wolgemuth" />

                <Person name="Lyndal Jolly" title="Communications" mobileHeight="mh-610px" image={Lyndal} bio="Lyndal is married to Dave and is a full-time mum to their 3 young boys. You may have met Lyndal when she used to work for Vision 100 as their event manager. Nowadays you’ll find Lyndal having a chat over delicious coffee, at their family business, Yellow Bernard. <br/><br/>This camp is a highlight of Lyndal’s year as she has a real passion for women of all ages coming together, to spend time drawing closer to God and each other!" />

                <Person name="Naomi Petrie" title="Activities" mobileHeight="mh-620px" image={Naomi} bio="Naomi is married to Matt and they have 3 preteen/teenage boys. On the days when she’s not working as a lab technician at the state's water testing facility, you’ll find Naomi catching up with friends or if given a chance, baking some treats for her pantry. <br/><br/>Naomi and her family have recently returned from an overseas holiday, where they got to spend some time in Thailand with Ruth Davies. During that visit she found she doesn’t enjoy the heat that much, but she does like to crochet and play board games." />

            </div>


        </div>
    </section >
)