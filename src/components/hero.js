import React, { useEffect } from 'react'
import { Hero, Container, Image, HeroBody, Title } from 'bloomer'
import { Link } from 'gatsby'

import '../styles/components/hero.scss'

import slide1 from '../images/starter/slide-1.jpg'
import slide2 from '../images/starter/slide-2.jpg'
import slide3 from '../images/starter/slide-3.jpg'
import slide4 from '../images/starter/slide-4.jpg'

const handleScroll = () => {
	const imageContainer = document.querySelector('.hero-slide--active .slide__image'),
		backgroundImage = document.querySelector('.hero-slide--active .slide__background-image'),
		slideContent = document.querySelector('.hero-slide--active .slide__content')

	const backgroundMovement = window.pageYOffset / 6;

	backgroundImage.style.backgroundPosition = `50% ${backgroundMovement}px`;
	imageContainer.style.opacity = 1 - (window.pageYOffset / 800);
	slideContent.style.opacity = 1 - (window.pageYOffset / 800);
};

const makeSlideActive = item => {
	const slideIndex = Array.prototype.slice.call(item.currentTarget.parentElement.children).indexOf(item.currentTarget);

	document.querySelectorAll('.hero-slide').forEach(item => {
		item.classList.remove('hero-slide--active');
	});

	document.querySelectorAll('.hero-slide')[slideIndex].classList.add('hero-slide--active');
}

const HeroSlider = () => {

	useEffect(() => {
		document.querySelectorAll('.hero-slide').forEach(item => {
			const imgSrc = item.querySelector('.slide__image img').src;

			item.querySelector('.slide__background-image').style.backgroundImage = `url(${imgSrc})`;
		});

		window.addEventListener('scroll', handleScroll);

		document.querySelectorAll('.slides-nav > div').forEach(item => {
			item.addEventListener('click', makeSlideActive.bind(item));
		})
	});

	return (
		<Hero>
			<div className="slides-nav">
				<div><span>1</span></div>
				<div><span>2</span></div>
				<div><span>3</span></div>
				<div><span>4</span></div>
			</div>
			<div className="slides-wrapper">
				<HeroBody className="hero-slide hero-slide--active">
					<div className="slide__background-image"></div>
					<div className="slide__background-colour"></div>
					<Container>
						<div className="slide__content">
							<Title tag="h2">Websport FC 3:1 London FC</Title>
							<p className="slide__excerpt">Well deserved 3 points in the last first game of the season.</p>
							<Link to="/" className="button is-primary is-inverted is-outlined mt-5">Match report</Link>
						</div>
						<div className="slide__image">
							<Image src={slide2} alt="" />
							<p className="slide__hashtag">#weblon</p>
						</div>
					</Container>
				</HeroBody>
				<HeroBody className="hero-slide">
					<div className="slide__background-image"></div>
					<div className="slide__background-colour"></div>
					<Container>
						<div className="slide__content">
							<Title tag="h2">Season tickets available</Title>
							<p className="slide__excerpt">Reserve a seat at our new stadium for the 2020-2021 campaign.</p>
							<Link to="/" className="button is-primary is-inverted is-outlined mt-5">More info</Link>
						</div>
						<div className="slide__image">
							<Image src={slide3} alt="" />
							<p className="slide__hashtag">#footballfans</p>
						</div>
					</Container>
				</HeroBody>
				<HeroBody className="hero-slide">
					<div className="slide__background-image"></div>
					<div className="slide__background-colour"></div>
					<Container>
						<div className="slide__content">
							<Title tag="h2">Websport FC returns to training</Title>
							<p className="slide__excerpt">After a long wait due to Coronavirus, your favourite grassroots club resumes training and is open to new players.</p>
							<Link to="/" className="button is-primary is-inverted is-outlined mt-5">Read more</Link>
						</div>
						<div className="slide__image">
							<Image src={slide1} alt="" />
							<p className="slide__hashtag">#backinbusiness</p>
						</div>
					</Container>
				</HeroBody>
				<HeroBody className="hero-slide">
					<div className="slide__background-image"></div>
					<div className="slide__background-colour"></div>
					<Container>
						<div className="slide__content">
							<Title tag="h2">Sponsorships opportunities</Title>
							<p className="slide__excerpt">Join the family of a successful local club. Let's grow together.</p>
							<Link to="/" className="button is-primary is-inverted is-outlined mt-5">Contact us</Link>
						</div>
						<div className="slide__image">
							<Image src={slide4} alt="" />
							<p className="slide__hashtag">#sponsorus</p>
						</div>
					</Container>
				</HeroBody>
			</div>
		</Hero>
	)
}

export default HeroSlider