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
		<div className="card card-compact w-96 bg-base-100 shadow-xl bg-dark ">
			<figure>
				<img src={image} alt={alt} />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p>{description}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-outline btn-primary">See products</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
