import React from 'react';

import './HomePage.css';
import {
	Avatar,
	Card,
	CardHorizontal,
	Carrousel,
	RevealOnScroll,
} from '@/components';

export type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = ({}) => {
	return (
		<>
			<RevealOnScroll>
				<Carrousel
					images={[
						'https://img.freepik.com/fotos-premium/salteado-pollo-verduras-vieja-sarten-wok-rustico-palillos-sobre-fondo-piedra-negra-cerca-vista-superior-comida-tradicional-asiatica-tailandesa_92134-1674.jpg',
						'https://riberasabadell.com/wp-content/uploads/2021/04/evitar-que-la-sarten-se-pegue-ribera-sabadell-cal-cargol.jpg',
						'https://e1.pxfuel.com/desktop-wallpaper/327/536/desktop-wallpaper-rissole-frypan-food.jpg',
						'https://e1.pxfuel.com/desktop-wallpaper/399/377/desktop-wallpaper-10-traditional-american-foods-american-food.jpg',
					]}
				/>
			</RevealOnScroll>
			<RevealOnScroll>
				<h1 className="text-4xl text-center my-9 font-bold text-sky-500">
					Products
				</h1>
			</RevealOnScroll>
			<RevealOnScroll>
				<div className=" container m-auto gap-10 flex items-center justify-center flex-wrap">
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
			</RevealOnScroll>
			<RevealOnScroll>
				<div className="text-center my-9">
					<button className="btn btn-primary ">See More</button>
				</div>
			</RevealOnScroll>
			<RevealOnScroll>
				<Carrousel
					images={[
						'https://img.freepik.com/fotos-premium/salteado-pollo-verduras-vieja-sarten-wok-rustico-palillos-sobre-fondo-piedra-negra-cerca-vista-superior-comida-tradicional-asiatica-tailandesa_92134-1674.jpg',
						'https://riberasabadell.com/wp-content/uploads/2021/04/evitar-que-la-sarten-se-pegue-ribera-sabadell-cal-cargol.jpg',
						'https://e1.pxfuel.com/desktop-wallpaper/327/536/desktop-wallpaper-rissole-frypan-food.jpg',
						'https://e1.pxfuel.com/desktop-wallpaper/399/377/desktop-wallpaper-10-traditional-american-foods-american-food.jpg',
					]}
				/>
			</RevealOnScroll>
			<RevealOnScroll>
				<h1 className="text-4xl text-center my-9 font-bold text-sky-500">
					Our brands
				</h1>
			</RevealOnScroll>
			<RevealOnScroll>
				<div className="container m-auto my-9 gap-10 flex justify-around flex-wrap">
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
			</RevealOnScroll>
			<RevealOnScroll>
				<h1 className="text-4xl text-center my-9 font-bold text-sky-500">
					News that brings us closer
				</h1>
			</RevealOnScroll>
			<RevealOnScroll>
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
			</RevealOnScroll>
			<RevealOnScroll>
				<div className="container m-auto my-9 gap-10 flex justify-center align-middle flex-wrap">
					<CardHorizontal
						image="https://kanoonforall.com/wp-content/uploads/2021/01/fimg-notice1.jpg"
						title="New Notices"
						description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, neque."
					/>
					<CardHorizontal
						image="https://kanoonforall.com/wp-content/uploads/2021/01/fimg-notice1.jpg"
						title="New Notices"
						description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, neque."
					/>
					<CardHorizontal
						image="https://kanoonforall.com/wp-content/uploads/2021/01/fimg-notice1.jpg"
						title="New Notices"
						description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, neque."
					/>

					<CardHorizontal
						image="https://kanoonforall.com/wp-content/uploads/2021/01/fimg-notice1.jpg"
						title="New Notices"
						description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, neque."
					/>
					<CardHorizontal
						image="https://kanoonforall.com/wp-content/uploads/2021/01/fimg-notice1.jpg"
						title="New Notices"
						description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, neque."
					/>
					<CardHorizontal
						image="https://kanoonforall.com/wp-content/uploads/2021/01/fimg-notice1.jpg"
						title="New Notices"
						description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, neque."
					/>
				</div>
			</RevealOnScroll>
			<RevealOnScroll>
				<h1 className="text-4xl text-center my-9 font-bold text-sky-500">
					Find all our products at:
				</h1>
			</RevealOnScroll>
			<RevealOnScroll>
				<div className="container m-auto my-9 gap-5 flex justify-around align-middle flex-wrap">
					<img
						className="w-40"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Grupo_Exito_logo.svg/1200px-Grupo_Exito_logo.svg.png"
						alt="grupo exito"
					/>
					<img
						className="w-40"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Grupo_Exito_logo.svg/1200px-Grupo_Exito_logo.svg.png"
						alt="grupo exito"
					/>
					<img
						className="w-40"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Grupo_Exito_logo.svg/1200px-Grupo_Exito_logo.svg.png"
						alt="grupo exito"
					/>
					<img
						className="w-40"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Grupo_Exito_logo.svg/1200px-Grupo_Exito_logo.svg.png"
						alt="grupo exito"
					/>
					<img
						className="w-40"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Grupo_Exito_logo.svg/1200px-Grupo_Exito_logo.svg.png"
						alt="grupo exito"
					/>
				</div>
			</RevealOnScroll>
			<RevealOnScroll>
				<div className="hero dark:bg-slate-800 bg-slate-900 mt-9">
					<div className="hero-content flex-col lg:flex-row-reverse">
						<img
							src="https://colombina.com/uploads/Logo_Market_Colombina.svg"
							className="max-w-sm rounded-lg shadow-2xl"
						/>
						<div className="mx-5">
							<h1 className="text-white dark:text-white text-3xl font-bold ">
								All the variety of products in one place
							</h1>
							<p className="py-6 text-white dark:text-white">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Temporibus minima eligendi sequi quia? Odio, ipsa?
							</p>
							<button className="btn btn-outline btn-primary btn-block text-white dark:text-white">
								Find the nearest place
							</button>
						</div>
					</div>
				</div>
			</RevealOnScroll>
		</>
	);
};

export default HomePage;
