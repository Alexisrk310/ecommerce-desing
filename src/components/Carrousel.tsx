import '@/styles/components/CarouselStyle.css';
import { Carousel } from 'flowbite-react';
const Carrousel = () => {
	return (
		<div className="carrousel-custom">
			<div className="h-80 sm:h-80 xl:h-full 2xl:h-full">
				<Carousel slideInterval={5000}>
					<img
						src="https://img.freepik.com/fotos-premium/salteado-pollo-verduras-vieja-sarten-wok-rustico-palillos-sobre-fondo-piedra-negra-cerca-vista-superior-comida-tradicional-asiatica-tailandesa_92134-1674.jpg"
						className="w-full h-carousel"
					/>
					<img
						src="https://riberasabadell.com/wp-content/uploads/2021/04/evitar-que-la-sarten-se-pegue-ribera-sabadell-cal-cargol.jpg"
						className="w-full h-carousel"
					/>
					<img
						src="https://e1.pxfuel.com/desktop-wallpaper/327/536/desktop-wallpaper-rissole-frypan-food.jpg"
						className="w-full h-carousel"
					/>
					<img
						src="https://e1.pxfuel.com/desktop-wallpaper/399/377/desktop-wallpaper-10-traditional-american-foods-american-food.jpg"
						className="w-full h-carousel"
					/>
				</Carousel>
			</div>
		</div>
	);
};

export default Carrousel;
