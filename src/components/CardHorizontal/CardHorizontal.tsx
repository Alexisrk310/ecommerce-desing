import React from 'react';
import './CardHorizontal.css';
import { Card } from 'flowbite-react';

export type CardHorizontalProps = {
	image: string;
	title: string;
	description: string;
};

const CardHorizontal: React.FC<CardHorizontalProps> = ({
	image,
	title,
	description,
}) => {
	return (
		<Card horizontal className="dark:bg-slate-800 bg-slate-400" imgSrc={image}>
			<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				<p>{title}</p>
			</h5>
			<p className="font-normal text-gray-700 dark:text-gray-400">
				{description}
			</p>
			<button className="btn btn-outline btn-primary">View More</button>
		</Card>
	);
};

export default CardHorizontal;
