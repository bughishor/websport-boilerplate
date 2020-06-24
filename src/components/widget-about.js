import React from 'react'
import { Section, Container, Title, Image, Button, Box, Content } from 'bloomer'

import '../styles/components/widget-about.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import badge from '../images/starter/badge.png'

const WidgetAbout = () => {
	return (
		<Section className="widget-about">
			<Container>
				<Content className="widget-about__header">
					<Title tag="h3" isSize={4} className="is-uppercase">About our club</Title>
					<p className="is-uppercase"><span>-</span>Est. 1994<span>-</span></p>
				</Content>
				<Box>
					<Image src={badge} />
					<Content>
						<p>The club has its origins as Godalming United FC, formed in 1950 by ex-pupils of Godalming Grammar School. 
							Between 1950-71 the club played at the Recreation Ground. However, in 1970 Surrey Senior League side Farncombe collapsed, 
							leaving their ground in Meadrow vacant. Godalming took over the debts and tenancy, changing their name to Godalming and Farncombe FC, 
							and the ground to Wey Court in the process.</p>
						<p>...</p>
						<Button isOutlined isColor='primary' href="#">
							<span>Read more</span>
							<span className="icon is-small">
								<FontAwesomeIcon icon={faArrowRight} />
							</span>
						</Button>
					</Content>
				</Box>
			</Container>
		</Section>
	)
}

export default WidgetAbout