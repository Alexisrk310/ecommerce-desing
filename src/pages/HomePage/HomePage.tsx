import React from 'react';

import './HomePage.css';
import { Avatar, Card, Carrousel } from '@/components';

export type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = ({}) => {
	return (
		<>
			<Carrousel
				images={[
					'https://img.freepik.com/fotos-premium/salteado-pollo-verduras-vieja-sarten-wok-rustico-palillos-sobre-fondo-piedra-negra-cerca-vista-superior-comida-tradicional-asiatica-tailandesa_92134-1674.jpg',
					'https://riberasabadell.com/wp-content/uploads/2021/04/evitar-que-la-sarten-se-pegue-ribera-sabadell-cal-cargol.jpg',
					'https://e1.pxfuel.com/desktop-wallpaper/327/536/desktop-wallpaper-rissole-frypan-food.jpg',
					'https://e1.pxfuel.com/desktop-wallpaper/399/377/desktop-wallpaper-10-traditional-american-foods-american-food.jpg',
				]}
			/>
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
			<div className="text-center my-9">
				<button className="btn btn-primary ">See More</button>
			</div>

			<Carrousel
				images={[
					'https://img.freepik.com/fotos-premium/salteado-pollo-verduras-vieja-sarten-wok-rustico-palillos-sobre-fondo-piedra-negra-cerca-vista-superior-comida-tradicional-asiatica-tailandesa_92134-1674.jpg',
					'https://riberasabadell.com/wp-content/uploads/2021/04/evitar-que-la-sarten-se-pegue-ribera-sabadell-cal-cargol.jpg',
					'https://e1.pxfuel.com/desktop-wallpaper/327/536/desktop-wallpaper-rissole-frypan-food.jpg',
					'https://e1.pxfuel.com/desktop-wallpaper/399/377/desktop-wallpaper-10-traditional-american-foods-american-food.jpg',
				]}
			/>

			<h1 className="text-6xl text-center my-9 font-bold text-sky-500">
				Our brands
			</h1>
			<div className="my-9 container flex gap-10 items-center justify-center flex-wrap">
				<Avatar
					imageAvatar={[
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
						'https://e7.pngegg.com/pngimages/104/119/png-clipart-orange-and-white-logo-computer-icons-icon-design-person-person-miscellaneous-logo.png',
					]}
				/>
			</div>
			<h1 className="text-6xl text-center my-9 font-bold text-sky-500">
				News that brings us closer
			</h1>
			<div
				className="hero max-h-96 rounded"
				style={{
					backgroundImage:
						'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
				}}>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">News Notices</h1>
						<p className="mb-5">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Blanditiis, possimus!
						</p>
						<button className="btn btn-primary">View more</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
