import React from 'react'

const Footer = ({ clubName }) => {
	return (
		<footer className="footer">
			<div className="container has-text-centered">
				{clubName} © {new Date().getFullYear()} | Website &amp; Content by {` `}
				<a href="https://websport.club">WebSport</a>
			</div>
		</footer>
	)
}

export default Footer