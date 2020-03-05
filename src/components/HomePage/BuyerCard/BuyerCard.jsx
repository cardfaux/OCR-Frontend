import React from 'react';
import styled from 'styled-components';

import Card from '../../../shared/UIElements/Card';

const BuyerCard = (props) => {
	return (
		<div className={props.className}>
			<Card>
				<h1>Buyer Card</h1>
			</Card>
		</div>
	);
};

export default styled(BuyerCard)`
	margin: 4rem;
`;
