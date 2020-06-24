module.exports = {
	siteMetadata: {
		title: `Websport FC`,
		description: `This is the title`,
		clubName: `WebSport FC`,
		author: `@websportclub`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-plugin-sass-resources`,
				options: {
					resources: ['./src/styles/breakpoints.scss', './src/styles/config.scss', './src/styles/global.scss']
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/starter/badge.png`, // This path is relative to the root of the site.
			},
		},
		// {
		//   resolve: "gatsby-source-strapi",
		//   options: {
		//     apiURL: "http://127.0.0.0:4000",
		//     contentTypes: [
		//       // List of the Content Types you want to be able to request from Gatsby.
		//       "club"
		//     ],
		//     queryLimit: 1000,
		//   },
		// },
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
