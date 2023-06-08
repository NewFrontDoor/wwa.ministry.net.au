import React from "react";
import styled from "styled-components";
import sliderimg from "../../assets/img/WWF2023_facebook-upscale.jpeg";

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
		<img src={sliderimg} alt="Women's Weekend Away 2023 Banner" />
	</HeaderContainer>
);
