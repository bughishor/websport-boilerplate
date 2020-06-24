import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Navbar, NavbarBrand, NavbarItem, Container, NavbarBurger, NavbarDropdown, NavbarEnd, NavbarMenu } from 'bloomer'
import SocialHeader from "./subcomponents/social-header"

import "../styles/components/header.scss"

import badge from '../images/starter/badge.png'

const Header = ({ siteTitle }) => {
	const triggerBurgerMenu = () => {
		document.querySelector('.navbar-burger').classList.toggle('is-active');
		document.querySelector('.navbar-menu').classList.toggle('is-active');
	}

	return (
		<header>
			<SocialHeader />
			<Navbar role="navigation" aria-label="main navigation">
				<Container>
					<NavbarBrand>
						<NavbarItem href="/">
							<img src={badge} alt="Club badge"></img>
						</NavbarItem>
						<NavbarBurger onClick={ triggerBurgerMenu } />
					</NavbarBrand>
					<NavbarMenu>
						<NavbarEnd>
							<Link to="/" className="navbar-item">Home</Link>
							<NavbarItem hasDropdown isHoverable>
								<Link to="/club" className="navbar-link">Club</Link>
								<NavbarDropdown>
									<Link to="/club" className="navbar-item">About</Link>
									<Link to="/staff" className="navbar-item">Staff</Link>
								</NavbarDropdown>
							</NavbarItem>
							<NavbarItem hasDropdown isHoverable>
								<Link to="/teams" className="navbar-link">Teams</Link>
								<NavbarDropdown>
									<Link to="/teams/first-team" className="navbar-item">First team</Link>
									<Link to="/teams/reserves" className="navbar-item">Reserves</Link>
								</NavbarDropdown>
							</NavbarItem>
							<Link to="/news" className="navbar-item">News</Link>
							<Link to="/contact" className="navbar-item">Contact</Link>
						</NavbarEnd>
					</NavbarMenu>
				</Container>
			</Navbar>
		</header>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
