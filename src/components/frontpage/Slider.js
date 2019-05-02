import React from 'react';
import bible from '../../assets/img/Bible.jpg'
import cross from '../../assets/img/Cross.jpg'

export default () => (
    <section id="feature_slider">
        {/*}
            Each slide is composed by <img> and .info
        - .info's position is customized with css in index.css
            - each <img> parallax effect is declared by the following params inside its class:

            example: className="asset left-472 sp600 t120 z3"
            left-472 means left: -472px from the center
            sp600 is speed transition
            t120 is top to 120px
            z3 is z-index to 3
            Note: Maintain this order of params

            For the backgrounds, you can combine from the bgs folder :D
-->*/}
        <article className="slide" id="showcasing" style={{ background: "url('img/backgrounds/landscape.png') repeat-x top center" }}>
            <img alt="" className="asset left-30 sp600 t120 z2 img img-responsive slider-img" src={cross} />
            <div className="info">
                <h2>Please join us for a wonderful time of fellowship and learning.</h2>
            </div>
        </article>
        <article className="slide" id="ideas" style={{ background: "url('img/backgrounds/aqua.jpg') repeat-x top center" }}>
            <div className="info">
                <h2>Register today!</h2>

                <div className="text-center">
                    <a href="/Register"><img alt="" className="img img-responsive left-210 sp600 t213 z2 slider-img" src={bible} /></a>
                </div>

            </div>
            {/*<img alt="" className="asset left-480 sp600 t260 z1" src="img/slides/scene2/left.png" />
            <img alt="" className="asset left-210 sp600 t213 z2" src="img/slides/scene2/middle.png" />
<img alt="" className="asset left60 sp600 t260 z1" src="img/slides/scene2/right.png" />*/}
        </article>
        {/*<article className="slide" id="tour" style={{ background: "url('img/backgrounds/color-splash.jpg') repeat-x top center" }}>
            <img alt="" className="asset left-472 sp650 t210 z3" src="img/slides/scene3/ipad.png" />
            <img alt="" className="asset left-365 sp600 t270 z4" src="img/slides/scene3/iphone.png" />
            <img alt="" className="asset left-350 sp450 t135 z2" src="img/slides/scene3/desktop.png" />
            <img alt="" className="asset left-185 sp550 t220 z1" src="img/slides/scene3/macbook.png" />
            <div className="info">
                <h2>Fully Responsive theme</h2>
                <a href="features.html">TOUR THE PRODUCT</a>
            </div>
        </article>
        <article className="slide" id="responsive" style={{ background: "url('img/backgrounds/indigo.jpg') repeat-x top center" }}>
            <img alt="" className="asset left-472 sp600 t120 z3" src="img/slides/scene4/html5.png" />
            <img alt="" className="asset left-190 sp500 t120 z2" src="img/slides/scene4/css3.png" />
            <div className="info">
                <h2>
                    Responsive <strong>HTML5 & CSS3</strong>
                    Theme
                </h2>
            </div>
        </article>*/}
    </section>
)