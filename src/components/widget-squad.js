import React from 'react'
import { Section, Container, Card, CardHeader, CardHeaderTitle, CardFooter, CardContent, CardFooterItem, Media, MediaLeft, Image, Title, CardImage, MediaContent, Subtitle, Content, Button } from 'bloomer'
import Carousel from '@brainhubeu/react-carousel';

import slide2 from '../images/starter/slide-4.jpg'
import realPic from '../images/starter/real-player.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import '@brainhubeu/react-carousel/lib/style.css';
import '../styles/components/widget-sponsors.scss';

import '../styles/components/widget-squad.scss'

const sectionStyle = {
	backgroundImage: `url(${slide2})`
}

const WidgetSquad = () => {
	const elements = ['Harry Kane', 'John Terry', 'Michael Owen', 'James Milner', 'Trent Alexander-Arnold', 'David Beckam', 'Joe Cole', 'David Seaman', 'Ronaldinho'];
	const items = []

  for (const [index, value] of elements.entries()) {
    items.push(
		<div className="player-card" key={index}>
			<Card>
				<CardHeader>
					<CardHeaderTitle>First Team</CardHeaderTitle>
				</CardHeader>
				<CardImage>
					<Image src={realPic} />
				</CardImage>
				<CardContent>
					<Media>
						<MediaLeft>
							<div className="shirt-number">#29</div>
						</MediaLeft>
						<MediaContent>
							<Title isSize={4} tag="h6">{value}</Title>
							<Subtitle isSize={6} tag="h6">Striker</Subtitle>
						</MediaContent>
					</Media>
					<Content>
						Hard to mark or to tackle, Harry is our top goalscorer and he is well known for his acrobatic finishing.
					</Content>
				</CardContent>
				<CardFooter>
					<CardFooterItem href="#">View profile</CardFooterItem>
				</CardFooter>
			</Card>
		</div>)
	}
	
	return (
		<Section className="widget-squad" style={ sectionStyle }>
			<Container>
				<Title tag="h3" className="widget-squad__header">Our team squad</Title>
				<p className="mb-5 widget-squad__subtitle">For when we are on the pitch, we are a <strong>Team</strong></p>

				<Carousel
					arrows 
					slidesPerPage={3} 
					infinite
					dots
					autoPlay={4000}
					animationSpeed={1000}
					stopAutoPlayOnHover={true}
					breakpoints={{
						640: {
							slidesPerPage: 1,
							arrows: false
						},
						1024: {
							slidesPerPage: 2,
							arrows: false
						}
					}}>
						{items}
				</Carousel>
				<Content className="mt-6">
					<Button href="#">
						<span>View all</span>
						<span className="icon is-small">
							<FontAwesomeIcon icon={faArrowRight} />
						</span>
					</Button>
				</Content>
			</Container>
		</Section>
	)
}

export default WidgetSquad