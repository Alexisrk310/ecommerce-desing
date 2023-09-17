import React from 'react';
import Carrousel from '@/components/Carrousel';
import Card from '@/components/Card';
import './HomePage.css';

export type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = ({}) => {
	return (
		<>
			<Carrousel />
			<h1 className="text-6xl text-center my-9 font-bold text-sky-500">
				Products
			</h1>
			<div className="container m-auto gap-10 flex items-center justify-center flex-wrap">
				<Card
					image="https://colombina.com/uploads/banner/9941694117419143.png"
					alt="hotDog"
					title="HOT DOG"
					description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, aperiam?"
				/>
				<Card
					image="https://colombina.com/uploads/banner/9941694117419143.png"
					alt="hotDog"
					title="HOT DOG"
					description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, aperiam?"
				/>
				<Card
					image="https://colombina.com/uploads/banner/9941694117419143.png"
					alt="hotDog"
					title="HOT DOG"
					description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, aperiam?"
				/>
				<Card
					image="https://colombina.com/uploads/banner/9941694117419143.png"
					alt="hotDog"
					title="HOT DOG"
					description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, aperiam?"
				/>
				<Card
					image="https://colombina.com/uploads/banner/9941694117419143.png"
					alt="hotDog"
					title="HOT DOG"
					description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, aperiam?"
				/>
				<Card
					image="https://colombina.com/uploads/banner/9941694117419143.png"
					alt="hotDog"
					title="HOT DOG"
					description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, aperiam?"
				/>
			</div>
		</>
	);
};

export default HomePage;
