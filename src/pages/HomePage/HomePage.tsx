import React from 'react';
import './HomePage.css';
// import Card from '@/components/Card';
import { Carousel } from '@/components/Carousel';

export type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = ({}) => {
	return (
		<div>
			<Carousel />
			{/* <Card /> */}
		</div>
	);
};

export default HomePage;
