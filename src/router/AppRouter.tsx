import { createBrowserRouter } from 'react-router-dom';
import {
	AboutPage,
	HomePage,
	NoFoundPage,
	ServicesPage,
	StorePage,
	UserAuth,
} from '@/pages';
import LayoutPage from '@/layout/LayoutPage';

export const AppRouter = createBrowserRouter([
	{
		path: '/',
		element: <LayoutPage />,
		errorElement: <NoFoundPage />,
		children: [
			{
				errorElement: <NoFoundPage />,

				children: [
					{
						index: true,
						element: <HomePage />,
					},

					{
						path: '/store',
						element: <StorePage />,
					},
					{
						path: '/services',
						element: <ServicesPage />,
					},
					{
						path: '/about',
						element: <AboutPage />,
					},
					{
						path: '/auth',
						element: <UserAuth />,
					},
				],
			},
		],
	},
]);
