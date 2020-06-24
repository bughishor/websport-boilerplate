import React from 'react'
import { Section, Container, Title, Columns, Column, Button, Image } from 'bloomer'

import '../styles/components/widget-contact.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import image2 from '../images/starter/shirt-mockup.png'

const WidgetContact = () => {
	return (
		<Section className="widget-contact">
			<Image src={image2} />
			<Container>
				<Columns>
					<Column>
						<Title tag="h4" isSize={3}>Want to join the club?</Title>
						<p className="is-size-4">Do you think you have what it takes to win trophies and become a legend for our club? 
							We're always on the look for players who will add value to our current squad. 
							Get in touch and tell us about your experience.</p>
						<Button isOutlined isColor='primary is-inverted' href="#" className="mt-5">
							<span>Contact us</span>
							<span className="icon is-small">
								<FontAwesomeIcon icon={faArrowRight} />
							</span>
						</Button>
					</Column>
					<Column>
					</Column>
				</Columns>
				<Columns>
					<Column></Column>
					<Column>
						<Title tag="h4" isSize={3}>Looking for sponsorhip opportunities?</Title>
						<p className="is-size-4">Are you a local or national company and want to associate your brand with a successful football club? 
							Help our club and our community by sponsoring us. Every little thing helps so reach out to us!</p>
						<Button isOutlined isColor='primary is-inverted' href="#" className="mt-5">
							<span>Contact us</span>
							<span className="icon is-small">
								<FontAwesomeIcon icon={faArrowRight} />
							</span>
						</Button>
					</Column>
				</Columns>
			</Container>
		</Section>
	)
}

export default WidgetContact