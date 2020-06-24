import React from 'react'
import { Section, Container, Title, Level, LevelLeft, LevelRight, LevelItem } from 'bloomer'
import { Link } from 'gatsby'

import "../../styles/components/social-header.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare, faInstagramSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'

const SocialHeader = () => {
	return (
		<Section className="social-header">
			<Container>
				<Level>
					<LevelLeft>
						<LevelItem className="social-buttons">
							<Link to="#">
								<FontAwesomeIcon icon={faFacebookSquare} />
							</Link>
							<Link to="#">
								<FontAwesomeIcon icon={faTwitterSquare} />
							</Link>
							<Link to="#">
								<FontAwesomeIcon icon={faInstagramSquare} />
							</Link>
							<Link to="#">
								<FontAwesomeIcon icon={faYoutubeSquare} />
							</Link>
							<Link to="#">
								<FontAwesomeIcon icon={faWhatsappSquare} />
							</Link>
						</LevelItem>
					</LevelLeft>
					<LevelRight>
						<Title tag="h1" isSize={5}><span>Websport FC</span>{` - `}Home of grassroots football in West London</Title>
					</LevelRight>
				</Level>
			</Container>
		</Section>
	)
}

export default SocialHeader