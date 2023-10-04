import React from 'react';
import './ServicesPage.css';
import { PricingCard, RevealOnScroll } from '@/components';

export type ServicesPageProps = {};

const ServicesPage: React.FC<ServicesPageProps> = ({}) => {
	return (
		<div className="servicespage">
			<RevealOnScroll>
				<div className="hero min-h-16 bg-base-200">
					<div className="hero-content flex-col lg:flex-row-reverse">
						<img
							src="https://cdn-icons-png.flaticon.com/512/1458/1458564.png"
							className="max-w-sm rounded-lg shadow-2xl"
						/>
						<div>
							<h1 className="text-5xl font-bold">Box Office News!</h1>
							<p className="py-6">
								Provident cupiditate voluptatem et in. Quaerat fugiat ut
								assumenda excepturi exercitationem quasi. In deleniti eaque aut
								repudiandae et a id nisi.
							</p>
							<button className="btn btn-primary">Get Started</button>
						</div>
					</div>
				</div>
			</RevealOnScroll>
			<RevealOnScroll>
				<h1 className="text-4xl text-center my-9 font-bold text-sky-500">
					Services
				</h1>
			</RevealOnScroll>

			<RevealOnScroll>
				<div className="container m-auto my-9 gap-10 flex items-center justify-center flex-wrap">
					<PricingCard
						plan="Standard plan"
						amount="3"
						benefit={[
							{ benefitText: 'Unlimited product listings', benefitBool: true },
							{ benefitText: 'Secure payment processing', benefitBool: true },
							{
								benefitText: 'Customizable storefront design',
								benefitBool: false,
							},
							{ benefitText: 'Mobile responsive', benefitBool: false },
							{ benefitText: 'Inventory management', benefitBool: false },
							{ benefitText: 'Discounts and promotions', benefitBool: false },
						]}
						timeOfPlan="month"
					/>

					<PricingCard
						plan="Platinium plan"
						amount="5"
						benefit={[
							{ benefitText: '24/7 Customer Support', benefitBool: true },
							{ benefitText: 'Advanced analytics', benefitBool: true },
							{ benefitText: 'SEO optimization tools', benefitBool: true },
							{ benefitText: 'Product reviews and ratings', benefitBool: true },
							{ benefitText: 'Multiple payment gateways', benefitBool: false },
							{ benefitText: 'Abandoned cart recovery', benefitBool: false },
						]}
						timeOfPlan="month"
					/>

					<PricingCard
						plan="Golden plan"
						amount="10"
						benefit={[
							{ benefitText: 'Premium templates library', benefitBool: true },
							{ benefitText: 'Multi-language support', benefitBool: true },
							{
								benefitText: 'Product variants and options',
								benefitBool: true,
							},
							{ benefitText: 'Inventory tracking', benefitBool: true },
							{
								benefitText: 'Integration with social media',
								benefitBool: true,
							},
							{ benefitText: 'Product recommendations', benefitBool: true },
						]}
						timeOfPlan="month"
					/>
				</div>
			</RevealOnScroll>
		</div>
	);
};

export default ServicesPage;
