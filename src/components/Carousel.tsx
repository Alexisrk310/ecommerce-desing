export const Carousel = () => {
	return (
		<div className="carousel carous w-full max-h-96">
			<div id="slide1" className="carousel-item relative w-full">
				<img
					src="https://cdn.ethic.es/wp-content/uploads/2023/03/imagen.jpg"
					className="w-full"
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
					src="https://kinsta.com/es/wp-content/uploads/sites/8/2018/10/tamanos-de-las-imagenes-de-las-redes-sociales-1024x512.png"
					className="w-full"
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
					src="https://cdn.ethic.es/wp-content/uploads/2023/03/imagen.jpg"
					className="w-full"
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
					src="https://cdn.ethic.es/wp-content/uploads/2023/03/imagen.jpg"
					className="w-full"
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
