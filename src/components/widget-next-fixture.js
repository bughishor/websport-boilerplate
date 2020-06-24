import React from 'react'
import { Section, Container, Title, Content, Tag, Image, Button } from 'bloomer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import badge from '../images/starter/slide-3.jpg'

import '../styles/components/widget-next-fixture.scss'

const WidgetNextFixture = () => {
	return (
		<Section className="widget-next-fixture">
			<Container>
				<Title tag="h3" isSize={4} className="is-uppercase">Next fixture</Title>
				<Content className="fixture-box-wrapper">
					<Content className="fixture-box">
						<Tag isColor="warning" isSize="medium" className="fixture-type">League</Tag>
						<Image src={badge} />
						<Title tag="h4" isSize={3}>WebSport FC</Title>
						<Title tag="h4" isSize={3}>Croydon Wanderers</Title>
						<span className="fixture-vs">vs</span>
						<p>Saturday <Tag isColor="black" isSize="medium">27.06.2020</Tag></p>
						<p>Kick Off <Tag isColor="black" isSize="medium">18:30</Tag></p>
						<p>Shalford Park, Guildford <Tag isColor="black" isSize="medium">GU23 7UZ</Tag></p>
						<Button isOutlined isColor='primary' href="#">
							<span>View details</span>
							<span className="icon is-small">
								<FontAwesomeIcon icon={faArrowRight} />
							</span>
						</Button>
					</Content>
				</Content>
			</Container>
		</Section>
	)
}

export default WidgetNextFixture