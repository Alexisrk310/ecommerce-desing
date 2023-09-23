import { Footer } from '@/components';
import { NavBar } from '@/components/NavBar';
import { Outlet } from 'react-router-dom';

const LayoutPage = () => {
	return (
		<>
			{/* <Drawer/> */}
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
};
export default LayoutPage;
