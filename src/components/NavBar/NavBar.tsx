import React from 'react';
import './NavBar.css';

export type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = ({}) => {
	return (
		<div className="navbar-center justify-center bg-base-100 hidden lg:flex">
			<ul className="menu menu-horizontal px-1">
				<li>
					<a>Item 1</a>
				</li>
				<li tabIndex={0} className="z-50">
					<details>
						<summary>Parent</summary>
						<ul className="p-2">
							<li>
								<a>Submenu 1</a>
							</li>
							<li>
								<a>Submenu 2</a>
							</li>
						</ul>
					</details>
				</li>
				<li>
					<a>Item 3</a>
				</li>
				<li>
					<a>Item 1</a>
				</li>
				<li tabIndex={0} className="z-50">
					<details>
						<summary>Parent</summary>
						<ul className="p-2">
							<li>
								<a>Submenu 1</a>
							</li>
							<li>
								<a>Submenu 2</a>
							</li>
						</ul>
					</details>
				</li>
				<li>
					<a>Item 3</a>
				</li>
				<li>
					<a>Item 1</a>
				</li>
				<li tabIndex={0} className="z-50">
					<details>
						<summary>Parent</summary>
						<ul className="p-2">
							<li>
								<a>Submenu 1</a>
							</li>
							<li>
								<a>Submenu 2</a>
							</li>
						</ul>
					</details>
				</li>
				<li>
					<a>Item 3</a>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
