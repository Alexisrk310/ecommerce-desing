import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { NavBar } from '@/components/NavBar';

import { Outlet } from 'react-router-dom';

const LayoutPage = () => {
	return (
		<>
			<Header />
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
};
export default LayoutPage;
