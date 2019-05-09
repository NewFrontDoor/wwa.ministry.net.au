/*eslint-disable*/
import React, { Component } from 'react';

import Banner from '../../../assets/img/WWA_2019.png';
import Speaker from '../../../assets/img/Kathy Thurston.jpg'

import Karen from '../../../assets/img/Karen Fair.jpg'
import Christine from '../../../assets/img/Christine Jolly.jpg'

class Retreat2019 extends Component {

    render() {
        

        return (
            <section className="container">
                <div className="section_header">
                    <h3>2019 Weekend Away</h3>
                </div>
                
                <div className="text-center">
                    <img src={Banner} alt="" className="img img-responsive page-banner" />
                </div>
                
                <h3>LOVING GOD - LOVING OTHERS</h3>
                <p>
                We love because he first loved us” (1 John 4:19) so we learn love by looking at God’s love and we see God’s love lived out by Jesus. But loving God and loving like Jesus doesn’t come naturally to us. To love like that, we need to “be filled to the measure of all the fullness of God” (Ephesians 3:19b) and if we could love like that, most of the world’s problems would disappear.
                </p>               
<p>
This year we're delving into the topic Loving God, Loving Others and grappling with questions of<br/> 
How does God love us?<br/>
How do we love people in our lives?<br/>
What is it that holds us back from loving others as God commands?
</p>

<p>
This year we are delighted to welcome Kathy Thurston as our main speaker <br/>
We're also offering optional electives on Saturday afternoon for those who want to go deeper.<br/> 
However we also want this weekend to be a time where you can relax and recharge, so why not use the free time to take a walk along the beautiful beach at Camp Clayton or take part in a pilates session.
</p>

<p>
Keep scrolling to find out more about our speaker, the electives on offer and pilates session. 
</p>

<p>
We hope you'll join us for a great weekend of worship, teaching and fellowship.
</p>
<br/>
<h3>Meet the Speaker</h3>
<div className="text-center">
            <img src={Speaker} alt=""className="img img-responsive speaker-img"/>
            </div>
            <h4>Kathy Thurston</h4>
            <p className="speaker-bio">
            Kathy is originally from Sydney and is the place where her adult children live and where her parish ministry and legal work was. However the last 2 years have brought many changes for Kathy when God called her and her husband Dave to move to Brisbane to work with a new ministry called <em>Church2Church</em>.
            <br/><br/>
            Looking back over the last few years Kathy believes that <em>God has been preparing us for this new role</em> which involved ministering to clergy couples through mentoring and providing additional support through great resources and church consultancy.  
            <br/><br/>
            Home is where the heart is, and despite missing her family Kathy’s move to Brisbane has still included a lot of things she enjoys like seeing different parts of Australia, meeting new people, reading great books, listening to music and in particular, talking to people about Jesus. 
            <br/><br/>
            In recent years God has been teaching Kathy that knowing him is what life is all about and we learn that by exploring how wide and long and high and deep God’s love is for us in Jesus.
            </p>

            <h3>Electives</h3>
            <p>This year we're looking forward to offering 2 Electives on Saturday afternoon</p>

            <ul className="electives-list">
              <li><strong>Women and Work</strong> with Karen Fair</li>
              <div className="text-center"><img src={Karen} alt="" className="img img-responsive elective-img"/></div>  
                <ul className="electives-sublist">
                    <li>It's a topic we've all had to grapple with at least once in our life. If women are given the task to help, what are the implications for work in the home and outside employment? What does this mean if you are single, married or widowed? In this elective, Karen will be gently addressing these questions in light of the Gospel.</li>
                    <li>Karen Fair belongs to <a href="https://soulchurch.org.au" rel="noopener noreferrer" target="_blank">Soul Church</a> where she loves opening up the Bible with women and talking about life. She is married to Steve. She enjoys doing simple but slow restoration of old furniture.</li>
                </ul>
              <li><strong>Women on Mission</strong> with Christine Jolly</li>
              <div className="text-center"><img src={Christine} alt="" className="img img-responsive elective-img"/></div>
                <ul className="electives-sublist">
                    <li>Women have been at the fore of bringing the good news of Jesus to his people since the resurrection. We’ll learn about key women throughout the history of the church who have put their own comfort aside to proclaim Jesus to unreached people, translating Scripture, caring for the marginalized and teaching God’s Word.</li>
                    <li>Moved to Tasmania 12 years ago after finding love on the internet. Christine uses her experience as a teacher and training at Bible college to inspire the next generation of missionaries at the Hobart AFES ministry, <a href="https://ufcutas.org/" target="_blank" rel="noreferrer noopener">University Fellowship of Christians</a>. Mother of 2 girls and wife to Mike, they enjoy building with Lego together.</li>
                </ul>
            </ul>

            <h3>Relax & Recharge</h3>
            <p>
                We're excited this year to be able to offer you an optional pilates session with Bec Wilcher. If you're interested in joining in you will need to bring an exercise mat. No prior experience required, all ages and physical abilities welcome - the only prerequisite is that you're able to get down and up from the floor. 
            </p>
<br/><br/>
            <a href="/Register"><input type="button" class="btn btn-primary " value="Register Now for the 2019 Weekend Away" /></a>
            </section>
        );
    }
}

export default Retreat2019;