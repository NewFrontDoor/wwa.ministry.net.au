import React from 'react';
import styled from 'styled-components'
import sliderimg from '../../assets/img/wwa-banner-notext.jpg'

const HeaderText = styled.div`
font-family: bebas-neue, sans-serif;
margin-top: 30px;
color: #fff;
text-shadow: 1px 1px #000;
font-size: 18px;
letter-spacing: 5px;
line-height: 2.32;
font-weight: 300;
`;

const HeaderLine = styled.div`
font-family: 'Seriffic', serif;
margin-bottom: 20px;
color: #fff;
text-shadow: 1px 1px #000;
font-size: 3vw;
letter-spacing: 3px;
line-height: 1.5;
font-weight: 200;
`;

const HeaderContainer = styled.div`
width: 100%;
min-height: 360px;
background-repeat: no-repeat;
background-position: center;
background-size: 100% 100%;
`;

const HeaderInfo = styled.div`
font-size: 26px;
line-height: 26px;
color: #fff;
width: 90%;
display: inline-block;
margin-top: 80px;
padding-top: 40px;
padding-bottom: 30px;
`


export default () => (
        <section id="header-img">
                <div className="text-center">
                        <HeaderContainer style={{ 'backgroundImage': `url('${sliderimg}')`, marginTop: "80px" }}>
                                {/*<img alt="" className="img img-responsive slider-img" src={sliderimg} />*/}
                                <HeaderInfo>
                                        <HeaderText>NEXT WOMEN'S WEEKEND AWAY</HeaderText>
                                        <HeaderLine>September 2022</HeaderLine><br /><br /><br />
                                </HeaderInfo>
                        </HeaderContainer>
                </div>
        </section>

)