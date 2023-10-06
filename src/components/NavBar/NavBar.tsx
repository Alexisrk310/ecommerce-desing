import React from 'react';
import './NavBar.css';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import { DarkMode } from '@/components';

export type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = ({}) => {
	return (
		<Navbar fluid rounded className="dark:bg-slate-900 bg-slate-900">
			<Navbar.Brand>
				<img
					alt="Flowbite React Logo"
					className="mr-3 h-6 sm:h-9"
					src="https://arastta.org/images/logo/arastta-logo.svg"
				/>
				<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-white">
					Ecommerce
				</span>
			</Navbar.Brand>
			<div className="flex md:order-2">
				<DarkMode />
				<Dropdown
					inline
					label={
						<Avatar
							alt="User settings"
							img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							rounded
						/>
					}>
					<Dropdown.Header>
						<span className="block text-sm">Bonnie Green</span>
						<span className="block truncate text-sm font-medium">
							name@gmail.com
						</span>
					</Dropdown.Header>
					<Dropdown.Item>Dashboard</Dropdown.Item>
					<Dropdown.Item>Settings</Dropdown.Item>
					<Dropdown.Item>Earnings</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item>Sign out</Dropdown.Item>
				</Dropdown>
				<Navbar.Toggle />
			</div>
			<Navbar.Collapse>
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive
							? 'text-blue-400 pointer navbar-brand'
							: 'pointer navbar-brand text-white dark:text-white'
					}>
					Home
				</NavLink>
				<NavLink
					to="/store"
					className={({ isActive }) =>
						isActive
							? 'text-blue-400 pointer navbar-brand'
							: 'pointer navbar-brand text-white dark:text-white'
					}>
					Store
				</NavLink>
				<NavLink
					to="/services"
					className={({ isActive }) =>
						isActive
							? 'text-blue-400 pointer navbar-brand'
							: 'pointer navbar-brand text-white dark:text-white'
					}>
					Services
				</NavLink>
				<NavLink
					to="/about"
					className={({ isActive }) =>
						isActive
							? 'text-blue-400 pointer navbar-brand'
							: 'pointer navbar-brand text-white dark:text-white'
					}>
					About
				</NavLink>
				<NavLink
					to="/login"
					className={({ isActive }) =>
						isActive
							? 'text-blue-400 pointer navbar-brand'
							: 'pointer navbar-brand text-white dark:text-white'
					}>
					Ser parte
				</NavLink>
				{/* <NavLink to="/">
					<Navbar.Link>Home</Navbar.Link>
				</NavLink>
				<NavLink to="/store">
					<Navbar.Link>Store</Navbar.Link>
				</NavLink>
				<NavLink to="/services">
					<Navbar.Link>Services</Navbar.Link>
				</NavLink>
				<NavLink to="/about">
					<Navbar.Link>About</Navbar.Link>
				</NavLink>
				<NavLink to="/auth">
					<Navbar.Link>Ser parte</Navbar.Link>
				</NavLink> */}
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
