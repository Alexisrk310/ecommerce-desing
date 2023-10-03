import React from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

export type LoginPageProps = {};

const LoginPage: React.FC<LoginPageProps> = ({}) => {
	const navigate = useNavigate();
	return (
		<div className="flex justify-center items-center min-h-screen">
			<form className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-md">
				<div>
					<div className="mb-4">
						<Label htmlFor="email1" value="Your email" />
					</div>
					<TextInput
						id="email1"
						placeholder="name@flowbite.com"
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
					No tienes cuenta?
				</p>
			</form>
		</div>
	);
};

export default LoginPage;
