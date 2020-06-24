import React from 'react'
import { Box, Heading, Image } from 'bloomer'

const SponsorBox = ({ title, image }) => {
	return (
		<div className="box-wrapper">
			<Box>
				<Heading tag="h4">{title}</Heading>
				<Image src={image} />
			</Box>
		</div>
	)
}

export default SponsorBox

// Currently not supported by the Carousel Widget