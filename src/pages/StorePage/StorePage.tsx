import React from 'react';
import './StorePage.css';
import { TextInput } from 'flowbite-react';
import { FaStore } from 'react-icons/fa';
import { ECommerceCard, SideBar } from '@/components';

export type StorePageProps = {};

const StorePage: React.FC<StorePageProps> = ({}) => {
	return (
		<div className="storepage">
			<div className="flex justify-center my-5">
				<TextInput
					icon={FaStore}
					style={{ width: 500 }}
					id="email4"
					placeholder="Search for something..."
					required
					type="email"
				/>
			</div>
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
					<ECommerceCard />S
				</div>
			</div>
		</div>
	);
};

export default StorePage;
