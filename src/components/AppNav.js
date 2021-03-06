import TweenLite from 'gsap';

import { NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './AppNavStyles.scss';

function NavBar({ navToggler, navToggleState }) {
	// getting the pathname, (used to add the homeNav class to the AppNav)
	const { pathname: currentRoutePath } = useLocation();

	useEffect(() => {
		// animates only on mobile when the hamburger menu is clicked adding the 'mobile-show' class
		const navTimeline = TweenLite.timeline();

		navTimeline.from('.mobile-show .route-link', {
			duration: 0.85,
			yPercent: -100,
			opacity: 0,
			scale: 0,
			stagger: 0.1,
			ease: 'elastic.out',
		});
	}, [navToggleState]);

	let navClass = navToggleState ? 'mobile-show' : 'mobile-hide';

	// this function is getting the NavLink className and toggling the AppNav
	const handleLinkClick = ({
		target: {
			parentElement: { className },
		},
	}) => {
		if (window.innerWidth <= 500)
			className === 'route-link' && setTimeout(navToggler, 150);
	};

	return (
		<nav
			className={navClass + `${currentRoutePath === '/' ? ' homeNav' : ''}`}
			onClick={handleLinkClick}
		>
			<ul className="wrapper nav-links">
				<li className="route-link">
					<NavLink activeClassName="active-link" exact to="/">
						Home
					</NavLink>
				</li>
				<li className="route-link">
					<NavLink activeClassName="active-link" to="/menu">
						Menu
					</NavLink>
				</li>
				<li className="route-link">
					<NavLink activeClassName="active-link" to="/book">
						Book
					</NavLink>
				</li>
				<li className="route-link">
					<NavLink activeClassName="active-link" to="/contact">
						Contact
					</NavLink>
				</li>
				<li className="route-link">
					<NavLink activeClassName="active-link" to="/about">
						About
					</NavLink>
				</li>
			</ul>
			{/* 
			<ul className="hamburger">
				<li className="line"></li>
				<li className="line"></li>
				<li className="line"></li>
			</ul> */}
		</nav>
	);
}

export default NavBar;
