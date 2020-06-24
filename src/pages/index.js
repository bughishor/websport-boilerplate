import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSlider from "../components/hero"
import WidgetResults from "../components/widget-results"
import WidgetSponsors from "../components/widget-sponsors"
import WidgetSquad from "../components/widget-squad"
import WidgetNextFixture from "../components/widget-next-fixture"
import WidgetTable from "../components/widget-table"
import WidgetContact from "../components/widget-contact"
import WidgetAbout from "../components/widget-about"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<HeroSlider />
		<WidgetResults />
		<WidgetNextFixture />
		<WidgetSquad />
		<WidgetTable />
		<WidgetAbout />
		<WidgetSponsors />
		<WidgetContact />
	</Layout>
)

export default IndexPage
