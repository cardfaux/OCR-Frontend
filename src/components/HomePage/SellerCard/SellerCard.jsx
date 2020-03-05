import React from 'react';
import styled from 'styled-components';

import Card from '../../../shared/UIElements/Card';

const SellerCard = (props) => {
	return (
		<div className={props.className}>
			<Card>
				<h1>Seller Card</h1>
			</Card>
		</div>
	);
};

export default styled(SellerCard)`
	margin: 4rem;
`;
