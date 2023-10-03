import React from 'react';
import './PricingCard.css';
import { Card } from 'flowbite-react';
import { HiCheckCircle, HiOutlineCheckCircle } from 'react-icons/hi';

type PricingCardProps = {
	plan: string;
	amount: string;
	timeOfPlan: string;
	benefit: Benefit[]; // Cambiar 'benefits' a 'Benefit[]'
	onClick?: Function;
};

type Benefit = {
	benefitText: string;
	benefitBool: boolean;
};

const PricingCard: React.FC<PricingCardProps> = ({
	plan,
	amount,
	timeOfPlan,
	benefit, // Inicializar 'benefit' como un array vacío si no se proporciona
	onClick,
}) => {
	return (
		<Card className="bg-base-300">
			<h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
				{plan}
			</h5>
			<div className="flex items-baseline text-gray-900 dark:text-white">
				<span className="text-3xl font-semibold">$</span>
				<span className="text-5xl text-base-content font-extrabold tracking-tight">
					{amount}
				</span>
				<span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
					/{timeOfPlan}
				</span>
			</div>
			<ul className="my-7 space-y-5">
				{benefit.map((bene, index) => (
					<li key={index} className="flex space-x-3">
						{bene.benefitBool ? <HiCheckCircle /> : <HiOutlineCheckCircle />}
						<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
							{bene.benefitText}
						</span>
					</li>
				))}
				{/* <li className="flex space-x-3">
					<HiCheckCircle />
					<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
						20GB Cloud storage
					</span>
				</li>
				<li className="flex space-x-3">
					<HiCheckCircle />
					<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
						Integration help
					</span>
				</li>
				<li className="flex space-x-3 line-through decoration-gray-500">
					<HiOutlineCheckCircle />
					<span className="text-base font-normal leading-tight text-gray-500">
						Sketch Files
					</span>
				</li>
				<li className="flex space-x-3 line-through decoration-gray-500">
					<HiOutlineCheckCircle />
					<span className="text-base font-normal leading-tight text-gray-500">
						API Access
					</span>
				</li>
				<li className="flex space-x-3 line-through decoration-gray-500">
					<HiOutlineCheckCircle />
					<span className="text-base font-normal leading-tight text-gray-500">
						Complete documentation
					</span>
				</li>
				<li className="flex space-x-3 line-through decoration-gray-500">
					<HiOutlineCheckCircle />
					<span className="text-base font-normal leading-tight text-gray-500">
						24x7 phone & email support
					</span>
				</li> */}
			</ul>
			<button
				onClick={() => onClick}
				className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
				type="button">
				<p>Choose plan</p>
			</button>
		</Card>
	);
};

export default PricingCard;
