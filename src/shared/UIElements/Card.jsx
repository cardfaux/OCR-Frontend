import React from 'react';

import { BoxShadow2 } from '../../styles/Shadows';
import styled from 'styled-components';

const Card = (props) => {
	return (
		<StyledCard className={`${props.className}`} style={props.style}>
			{props.children}
		</StyledCard>
	);
};

const StyledCard = styled.div`
	/* margin: 0; */
	box-shadow: ${BoxShadow2};
	border-radius: 6px;
	padding: 1rem;
	overflow: hidden;
	background: white;
`;

export default Card;
