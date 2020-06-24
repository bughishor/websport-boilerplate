import React from 'react'
import '../styles/components/widget-results.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Level, LevelLeft, LevelRight, LevelItem, Title, Container, Columns, Column, Card, CardHeader, CardHeaderTitle, CardContent, CardFooter, CardFooterItem } from 'bloomer'

const WidgetResults = () => {
	return (
		<div className="section widget-results">
			<Container>
				<Level isMobile="true">
					<LevelLeft>
						<Title tag="h3" isSize={4} className="is-uppercase">Latest results</Title>
					</LevelLeft>
					<LevelRight>
						<LevelItem className="button is-primary is-outlined" href="#">
							<span>View all</span>
							<span className="icon is-small">
								<FontAwesomeIcon icon={faArrowRight} />
							</span>
						</LevelItem>
					</LevelRight>
				</Level>
				<Columns>
					<Column>
						<Card>
							<CardHeader>
								<CardHeaderTitle>League</CardHeaderTitle>
							</CardHeader>
							<CardContent className="result-card">
								<span className="result-type">W</span>
								<div className="result-info">
									<time dateTime="2020-06-15">15.06.2020</time>
									<div className="result-teams">
										<strong>Websport FC</strong>
										{` vs `}
										<span>London FC</span>
									</div>
									<span className="result-score">3-1</span>
								</div>
							</CardContent>
							<CardFooter>
								<CardFooterItem href="#">Details</CardFooterItem>
							</CardFooter>
						</Card>
					</Column>
					<Column>
						<Card>
							<CardHeader>
								<CardHeaderTitle>League</CardHeaderTitle>
							</CardHeader>
							<CardContent className="result-card">
								<span className="result-type is-draw">D</span>
								<div className="result-info">
									<time dateTime="2020-06-10">10.06.2020</time>
									<div className="result-teams">
										<strong>Websport FC</strong>
										{` vs `}
										<span>Brighton AFC</span>
									</div>
									<span className="result-score">1-1</span>
								</div>
							</CardContent>
							<CardFooter>
								<CardFooterItem href="#">Details</CardFooterItem>
							</CardFooter>
						</Card>
					</Column>
					<Column>
						<Card>
							<CardHeader>
								<CardHeaderTitle>League</CardHeaderTitle>
							</CardHeader>
							<CardContent className="result-card">
								<span className="result-type is-loss">L</span>
								<div className="result-info">
									<time dateTime="2020-06-01">01.06.2020</time>
									<div className="result-teams">
										<span>Wey Hill FC</span>
										{` vs `}
										<strong>Websport FC</strong>
									</div>
									<span className="result-score">4-0</span>
								</div>
							</CardContent>
							<CardFooter>
								<CardFooterItem href="#">Details</CardFooterItem>
							</CardFooter>
						</Card>
					</Column>
				</Columns>
			</Container>
		</div>
	)
}

export default WidgetResults