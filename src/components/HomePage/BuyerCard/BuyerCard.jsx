import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Card from '../../../shared/UIElements/Card';

import { Melon } from '../../../styles/Colors';

const BuyerCard = (props) => {
	return (
		<div className={props.className}>
			<Link to='/buyer'>
				<Card>
					<h1>Buyer Card</h1>
				</Card>
			</Link>
		</div>
	);
};

export default styled(BuyerCard)`
	margin: 4rem;
	> a {
		text-decoration: none;
		color: black;
		&:hover {
			color: ${Melon};
		}
	}
`;
