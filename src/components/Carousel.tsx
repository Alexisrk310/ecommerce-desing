import '@/styles/components/CarouselStyle.css';
const Carousel = () => {
	return (
		<div className="carousel carous w-full h-carousel">
			<div id="slide1" className="carousel-item relative w-full">
				<img
					src="https://img.freepik.com/fotos-premium/salteado-pollo-verduras-vieja-sarten-wok-rustico-palillos-sobre-fondo-piedra-negra-cerca-vista-superior-comida-tradicional-asiatica-tailandesa_92134-1674.jpg"
					className="w-full h-carousel"
				/>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide4" className="btn btn-circle">
						❮
					</a>
					<a href="#slide2" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide2" className="carousel-item relative w-full">
				<img
					src="https://riberasabadell.com/wp-content/uploads/2021/04/evitar-que-la-sarten-se-pegue-ribera-sabadell-cal-cargol.jpg"
					className="w-full h-carousel"
				/>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide1" className="btn btn-circle">
						❮
					</a>
					<a href="#slide3" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide3" className="carousel-item relative w-full">
				<img
					src="https://e1.pxfuel.com/desktop-wallpaper/327/536/desktop-wallpaper-rissole-frypan-food.jpg"
					className="w-full h-carousel"
				/>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide2" className="btn btn-circle">
						❮
					</a>
					<a href="#slide4" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide4" className="carousel-item relative w-full">
				<img
					src="https://e1.pxfuel.com/desktop-wallpaper/399/377/desktop-wallpaper-10-traditional-american-foods-american-food.jpg"
					className="w-full h-carousel"
				/>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide3" className="btn btn-circle">
						❮
					</a>
					<a href="#slide1" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
