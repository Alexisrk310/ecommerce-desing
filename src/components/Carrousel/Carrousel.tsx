import React from 'react';
import './Carrousel.css';
import { Carousel } from 'flowbite-react';

export type CarrouselProps = {
	images: string[];
};

const Carrousel: React.FC<CarrouselProps> = ({ images }) => {
	return (
		<div className="carrousel-custom">
			<div className="h-80 sm:h-80 xl:h-full 2xl:h-full">
				<Carousel slideInterval={5000}>
					{images?.map((image: string, index: number) => (
						<img
							key={index}
							src={image}
							className="w-full h-carousel"
							alt="img-carrousel"
						/>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default Carrousel;
