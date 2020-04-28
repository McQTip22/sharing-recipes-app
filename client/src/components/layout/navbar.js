import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-primary">
				<Link to="/" className="navbar-brand">
					Sharing Recepies
				</Link>
			</nav>
		);
	}
}

export default Navbar;
