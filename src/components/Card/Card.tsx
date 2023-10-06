import React from 'react';
import './Card.css';

export type CardProps = {
	image: string;
	alt: string;
	title: string;
	description: string;
};

const Card: React.FC<CardProps> = ({ image, alt, title, description }) => {
	return (
		<div className="card card-compact w-96 dark:bg-slate-800 bg-slate-400 shadow-xl bg-dark ">
			<figure>
				<img src={image} alt={alt} />
			</figure>
			<div className="card-body">
				<h2 className="card-title text-black dark:text-white">{title}</h2>
				<p className="text-black dark:text-white">{description}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-outline btn-primary">See products</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
