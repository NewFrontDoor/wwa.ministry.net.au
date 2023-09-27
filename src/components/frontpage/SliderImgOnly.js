import React from "react";
import styled from "styled-components";
import sliderimg from "../../assets/img/WWA Website Banner.png";

const HeaderContainer = styled.div`
	margin-top: 81px;
	img {
		display: block;
		width: 100%;
		height: auto;
	}
`;

export default () => (
	<HeaderContainer>
		<img src={sliderimg} alt="Women's Weekend Away Banner" />
	</HeaderContainer>
);
