import React from 'react'
import { Section, Container, Title, Box, Table, Level, LevelLeft, LevelRight, LevelItem } from 'bloomer'

import '../styles/components/widget-table.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'

const expandTable = () => {
	const tableBox = document.querySelector('.widget-table .box'),
		fullHeight = tableBox.querySelector('.table').offsetHeight;

	tableBox.style.maxHeight = `${fullHeight}px`;
}

const WidgetTable = () => {
	return (
		<Section className="widget-table">
			<Container>
				<Title tag="h3" isSize={4} className="is-uppercase">Table</Title>
				<Box>
					<Table isStriped className="is-fullwidth is-hoverable">
					<thead>
						<tr>
							<th>Pos</th>
							<th>Club</th>
							<th><abbr title="Won">W</abbr></th>
							<th><abbr title="Drawn">D</abbr></th>
							<th><abbr title="Lost">L</abbr></th>
							<th>Pts</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Wey Hill FC</td>
							<td>0</td>
							<td>0</td>
							<td>0</td>
							<td>0</td>
						</tr>
						<tr className='is-selected'>
							<td>2</td>
							<td>Wey Hill FC</td>
							<td>0</td>
							<td>0</td>
							<td>0</td>
							<td>0</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Wey Hill FC</td>
							<td>0</td>
							<td>0</td>
							<td>0</td>
							<td>0</td>
						</tr>
						<tr>
							<td>4</td>
							<td>Wey Hill FC</td>
							<td>0</td>
							<td>0</td>
							<td>0</td>
							<td>0</td>
						</tr>
						<tr>
							<td>5</td>
							<td>Wey Hill FC</td>
							<td>0</td>
							<td>0</td>
							<td>0</td>
							<td>0</td>
						</tr>
						<tr>
							<td>6</td>
							<td>Wey Hill FC</td>
							<td>0</td>
							<td>0</td>
							<td>0</td>
							<td>0</td>
						</tr>
						<tr>
							<td>7</td>
							<td>Wey Hill FC</td>
							<td>0</td>
							<td>0</td>
							<td>0</td>
							<td>0</td>
						</tr>
						<tr>
							<td>8</td>
							<td>Wey Hill FC</td>
							<td>0</td>
							<td>0</td>
							<td>0</td>
							<td>0</td>
						</tr>
						<tr>
							<td>9</td>
							<td>Wey Hill FC</td>
							<td>0</td>
							<td>0</td>
							<td>0</td>
							<td>0</td>
						</tr>
						<tr>
							<td>10</td>
							<td>Wey Hill FC</td>
							<td>0</td>
							<td>0</td>
							<td>0</td>
							<td>0</td>
						</tr>
					</tbody>
					</Table>
				</Box>
				<Level isMobile="true">
					<LevelLeft>
						<LevelItem className="button is-light" onClick={expandTable}>
							<span>Expand</span>
							<span className="icon is-small">
								<FontAwesomeIcon icon={faAngleDown} />
							</span>
						</LevelItem>
					</LevelLeft>
					<LevelRight>
						<LevelItem className="button is-primary is-outlined" href="#">
							<span>View full table</span>
							<span className="icon is-small">
								<FontAwesomeIcon icon={faArrowRight} />
							</span>
						</LevelItem>
					</LevelRight>
				</Level>
			</Container>
		</Section>
	)
}

export default WidgetTable