import { Footer, Header } from '@/components';
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
