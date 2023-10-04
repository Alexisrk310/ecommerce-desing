import React from 'react';
import './StorePage.css';
import { TextInput } from 'flowbite-react';
import { FaStore } from 'react-icons/fa';
import { ECommerceCard, RevealOnScroll } from '@/components';

export type StorePageProps = {};

const StorePage: React.FC<StorePageProps> = ({}) => {
	return (
		<div className="storepage">
			<RevealOnScroll>
				<div className="mx-auto w-full lg:w-1/2">
					<TextInput
						icon={FaStore}
						id="email4"
						placeholder="Search for something..."
						required
						type="email"
					/>
				</div>
			</RevealOnScroll>
			<RevealOnScroll>
				<div className="container m-auto flex justify-around gap-16 my-5">
					{/* <SideBar /> */}

					<div className="gap-10 flex flex-wrap justify-center">
						<ECommerceCard />
						<ECommerceCard />
						<ECommerceCard />
						<ECommerceCard />
						<ECommerceCard />
						<ECommerceCard />
						<ECommerceCard />
						<ECommerceCard />
						<ECommerceCard />
						<ECommerceCard />
						<ECommerceCard />
						<ECommerceCard />
					</div>
				</div>
			</RevealOnScroll>
		</div>
	);
};

export default StorePage;
