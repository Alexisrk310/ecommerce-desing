import { createBrowserRouter } from 'react-router-dom';
import { HomePage, NoFoundPage } from '@/pages';
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
				],
			},
		],
	},
]);
