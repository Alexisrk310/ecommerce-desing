import React from 'react';
import './AboutPage.css';
import { RevealOnScroll } from '@/components';

export type AboutPageProps = {};

const AboutPage: React.FC<AboutPageProps> = ({}) => {
	return (
		<div className="aboutpage h-screen md:m-16">
			<RevealOnScroll>
				<h1 className="text-4xl text-center my-9 font-bold text-sky-500">
					Find us how
				</h1>
			</RevealOnScroll>
			<RevealOnScroll>
				<div className="mockup-browser border h-96 dark:bg-black bg-black">
					<div className="mockup-browser-toolbar ">
						<div className="input">
							https://ecommerce-desing-ebon.vercel.app/
						</div>
					</div>
					<div className=" justify-center px-4 py-16 bg-gray-900 dark:bg-gray-900 h-full">
						<p className="text-white">
							On an e-commerce page that offers services such as standard,
							platinum and gold plans, you can find a wide range of options
							designed to meet various needs and preferences. These plans are
							designed to provide users a personalized and efficient experience.
							here are some of the features and benefits you could find in each
							one of these plans:
						</p>
						<p className="text-slate-500">
							1. **Standard Plan:** - Basic access to the services offered. -
							Basic level product or service options. - Prices affordable for
							those with simpler needs. - Medium limited technical. - Optional
							upgrades available for a additional cost.
						</p>
						<p className="text-blue-300">
							2. **Platinum Plan:** - Premium access with features improved. -
							Wide selection of high quality products or services quality. -
							Priority customer service. - Discounts exclusives and special
							offers. - Advanced customization and additional characteristics.
						</p>
						<p className="text-yellow-200">
							3. **Gold Plan:** - Elite access with all features premium. -
							Top-notch products or services. - Medium 24/7 customer service. -
							Significant discounts and exclusive promotions. - Complete
							customization and exclusive membership features. Regardless of the
							Whichever plan you choose, a well-designed e-commerce page will
							offer you a convenient and efficient shopping experience. The
							services adapt to your needs and preferences, and you can expect a
							high level of quality and service in each of these plans. Explore
							the options and choose the plan that best suits you! to you!
						</p>
					</div>
				</div>
			</RevealOnScroll>
		</div>
	);
};

export default AboutPage;
