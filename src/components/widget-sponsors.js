import React from 'react'
import Carousel from '@brainhubeu/react-carousel';
import { Section, Container, Box, Heading, Image, Title } from 'bloomer'
// import SponsorBox from './subcomponents/sponsor-box'

import '@brainhubeu/react-carousel/lib/style.css';
import '../styles/components/widget-sponsors.scss';

import sponsor1 from '../images/starter/sponsor-1.png'
import sponsor2 from '../images/starter/sponsor-2.png'
import sponsor3 from '../images/starter/sponsor-3.png'
import sponsor4 from '../images/starter/sponsor-4.png'
import sponsor5 from '../images/starter/sponsor-5.png'
import sponsor6 from '../images/starter/sponsor-6.png'

const WidgetSponsors = () => {

	return (
		<Section>
			<Container>
				<Title tag="h3" isSize={4} className="is-uppercase has-text-centered">Our sponsors</Title>
				<Carousel 
					arrows 
					slidesPerPage={3} 
					infinite
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
					}}
					>
					<a className="box-wrapper" href="/">
						<Box>
							<Heading tag="h4">WebSport</Heading>
							<Image src={sponsor1} isSize="128x128" />
						</Box>
					</a>
					<a className="box-wrapper" href="/">
						<Box>
							<Heading tag="h4">Car &amp; Tyres Clinic</Heading>
							<Image src={sponsor2} isSize="128x128" />
						</Box>
					</a>
					<a className="box-wrapper" href="/">
						<Box>
							<Heading tag="h4">GT20 Accounting</Heading>
							<Image src={sponsor3} isSize="128x128" />
						</Box>
					</a>
					<a className="box-wrapper" href="/">
						<Box>
							<Heading tag="h4">Football 1on1</Heading>
							<Image src={sponsor4} isSize="128x128" />
						</Box>
					</a>
					<a className="box-wrapper" href="/">
						<Box>
							<Heading tag="h4">Aspazia.co.uk</Heading>
							<Image src={sponsor5} isSize="128x128" />
						</Box>
					</a>
					<a className="box-wrapper" href="/">
						<Box>
							<Heading tag="h4">Redpack Digital</Heading>
							<Image src={sponsor6} isSize="128x128" />
						</Box>
					</a>
				</Carousel>	
			</Container>
		</Section>
	)
}

export default WidgetSponsors