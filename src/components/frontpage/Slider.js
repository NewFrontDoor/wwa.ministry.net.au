import React from 'react';
import styled from 'styled-components'
import sliderimg from '../../assets/img/green-background.jpg'

const HeaderText = styled.div`
font-family: 'Alike', serif !important;
margin-top: 30px;
margin-bottom: 20px;
color: #fff;
text-shadow: 1px 1px #000;
font-size: 25px;
line-height: 2.32;
font-weight: 400;
`;

const HeaderContainer = styled.div`
width: 100%;
min-height: 360px;
background-repeat: no-repeat;
background-position: center;
background-size: 100% 100%;
`

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
                                        <HeaderText>Due to COVID-19 we've had to postpone our 2020 weekend together.<br />
                                        However we'd love you to SAVE THE DATE  for next year!</HeaderText><br />
                                        <HeaderText>10th - 12th September 2021<br />
                                        CAMP CLAYTON, TASMANIA</HeaderText>
                                </HeaderInfo>
                        </HeaderContainer>
                </div>
        </section>

)       