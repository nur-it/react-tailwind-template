import React, { Fragment } from 'react'
import Footer from '../components/shared/Footer'
import Navbar from '../components/shared/Navbar'

const Layout = ({ children }) => {
	return (
		<Fragment>
			<header>
				<Navbar />
			</header>
			<main>{children}</main>
			<footer>
				<Footer />
			</footer>
		</Fragment>
	)
}

export default Layout
