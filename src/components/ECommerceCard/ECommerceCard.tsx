import React from 'react';
import './ECommerceCard.css';
import { Card } from 'flowbite-react';
import { Rating } from 'flowbite-react';

export type ECommerceCardProps = {};

const ECommerceCard: React.FC<ECommerceCardProps> = ({}) => {
	return (
		<Card
			imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
			imgSrc="https://img.freepik.com/foto-gratis/frutas-coloridas-sabroso-jugoso-maduro-fresco-escritorio-blanco_179666-169.jpg?w=2000"
			className="w-72 bg-white dark:bg-slate-800">
			<a href="#">
				<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
					<p>Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</p>
				</h5>
			</a>
			<div className="mb-5 mt-2.5 flex items-center">
				<Rating>
					<Rating.Star />
					<Rating.Star />
					<Rating.Star />
					<Rating.Star />
					<Rating.Star />
					<p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
						4.95 out of 5
					</p>
				</Rating>
			</div>
			<div className="flex items-center justify-between">
				<span className="text-3xl font-bold text-gray-900 dark:text-white">
					$599
				</span>
				<a
					className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
					href="#">
					<p>Add to cart</p>
				</a>
			</div>
		</Card>
	);
};

export default ECommerceCard;
