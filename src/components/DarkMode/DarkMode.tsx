import React, { useEffect, useState } from 'react';
import './DarkMode.css';
import { DarkThemeToggle } from 'flowbite-react';
// import { DarkThemeToggle } from 'flowbite-react';

export type DarkModeProps = {};

const DarkMode: React.FC<DarkModeProps> = ({}) => {
	const [theme, setTheme] = useState(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		}

		return 'light';
	});

	useEffect(() => {
		if (theme === 'dark') {
			document.querySelector('html')?.classList.add('dark');
			document.querySelector('#root')?.classList.add('bg-slate-900');
			document.querySelector('#root')?.classList.remove('bg-white');
		} else {
			document.querySelector('html')?.classList.remove('dark');
			document.querySelector('#root')?.classList.remove('bg-slate-900');
			document.querySelector('#root')?.classList.add('bg-white');
		}
	}, [theme]);

	const handleChangeTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};
	console.log(theme);

	return (
		<>
			<DarkThemeToggle onClick={handleChangeTheme} />
		</>
	);
};

export default DarkMode;
