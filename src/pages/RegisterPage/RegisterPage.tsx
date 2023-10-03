import React from 'react';
import './RegisterPage.css';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
export type RegisterPageProps = {};

const RegisterPage: React.FC<RegisterPageProps> = ({}) => {
	const navigate = useNavigate();

	return (
		<div className="flex justify-center items-center min-h-screen">
			<form className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-md">
				<div>
					<div className="mb-4">
						<Label htmlFor="name" value="Name" />
						<TextInput id="name" type="text" placeholder="John Doe" required />
					</div>
				</div>
				<div>
					<div className="mb-4">
						<Label htmlFor="email" value="Email Address" />
						<TextInput
							id="email"
							type="email"
							placeholder="name@example.com"
							required
						/>
					</div>
				</div>
				<div>
					<div className="mb-4">
						<Label htmlFor="phone" value="Phone Number" />
						<TextInput
							id="phone"
							type="tel"
							placeholder="123-456-7890"
							required
						/>
					</div>
				</div>
				<div>
					<div className="mb-4">
						<Label htmlFor="password" value="Password" />
						<TextInput
							id="password"
							type="password"
							placeholder="********"
							required
						/>
					</div>
				</div>
				<div className="flex items-center mb-4">
					<Checkbox id="terms" />
					<Label htmlFor="terms" value="I agree to the Terms and Conditions" />
				</div>
				<Button type="submit" className="w-full">
					Submit
				</Button>
				<p
					className="text-center mt-5 cursor-pointer"
					onClick={() => navigate('/login')}>
					Ya tienes cuenta?
				</p>
			</form>
		</div>
	);
};

export default RegisterPage;
