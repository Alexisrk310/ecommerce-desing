import React from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { RevealOnScroll } from '@/components';
import './LoginPage.css';

export type LoginPageProps = {};

const LoginPage: React.FC<LoginPageProps> = ({}) => {
	const navigate = useNavigate();
	return (
		<div className="relative">
			{/* Segundo SVG centrado detrás del formulario */}
			<RevealOnScroll>
				<svg
					viewBox="0 0 200 200"
					xmlns="http://www.w3.org/2000/svg"
					className="max-w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<path
						fill="#0E7490"
						d="M46.3,-59.3C58.9,-54.7,67.1,-39.6,67.9,-24.9C68.7,-10.3,62.1,3.9,58.3,20.1C54.6,36.3,53.8,54.6,44.5,63C35.3,71.4,17.7,69.9,3.4,65.2C-10.8,60.5,-21.6,52.5,-33.6,45C-45.7,37.5,-59,30.5,-61.7,20.5C-64.4,10.4,-56.5,-2.7,-50.9,-15.5C-45.3,-28.2,-41.9,-40.6,-33.8,-46.7C-25.7,-52.7,-12.8,-52.4,2,-55.2C16.9,-58,33.8,-63.9,46.3,-59.3Z"
						transform="translate(100 100)"
					/>
				</svg>
			</RevealOnScroll>

			<RevealOnScroll>
				<div className="flex justify-center items-center min-h-screen">
					<form className="z-50 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-md">
						<div>
							<div className="mb-4">
								<Label htmlFor="email1" value="Your email" />
							</div>
							<TextInput
								id="email1"
								placeholder="name@example.com"
								required
								type="email"
							/>
						</div>
						<div>
							<div className="mb-4">
								<Label htmlFor="password1" value="Your password" />
							</div>
							<TextInput id="password1" required type="password" />
						</div>
						<div className="flex items-center mb-4">
							<Checkbox id="remember" />
							<Label htmlFor="remember">Remember me</Label>
						</div>
						<Button type="submit" className="w-full">
							Submit
						</Button>
						<p
							className="text-center mt-5 cursor-pointer"
							onClick={() => navigate('/register')}>
							I'm not part yet
						</p>
					</form>
				</div>
			</RevealOnScroll>
		</div>
	);
};

export default LoginPage;
