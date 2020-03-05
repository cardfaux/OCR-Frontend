import React from 'react';

import BuyerCard from '../../components/HomePage/BuyerCard/BuyerCard';
import SellerCard from '../../components/HomePage/SellerCard/SellerCard';
import BuyerUpload from '../../components/Upload/BuyerUpload/BuyerUpload';

const HomePage = () => {
	return (
		<div>
			<BuyerCard />
			<SellerCard />
			<BuyerUpload />
		</div>
	);
};

export default HomePage;
