import React from "react"
import {Link, graphql, useStaticQuery} from 'gatsby'

import * as headerStyles from './header.module.scss'

const Header = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return(
		<div>
		<h1>{data.site.siteMetadata.title}</h1>
			<nav>
				<ul className={headerStyles.navList}>
					<li>
						<Link className={headerStyles.navListItem} activeClassName={headerStyles.navActive} to='/'>Home</Link>
					</li>
					<li>
						<Link className={headerStyles.navListItem} activeClassName={headerStyles.navActive} to='/about'>About</Link>
					</li>
					<li>
						<Link className={headerStyles.navListItem} activeClassName={headerStyles.navActive} to='/blog'>Blog</Link>
					</li>
					<li>
						<Link className={headerStyles.navListItem} activeClassName={headerStyles.navActive} to='/contact'>Contact</Link>
					</li>
					<li>
					</li>
				</ul>
			</nav>
		</div>
  )
}

export default Header