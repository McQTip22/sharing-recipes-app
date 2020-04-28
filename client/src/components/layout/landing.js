import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
class Landing extends Component {
	render() {
		return (
			<div className="container-fluid m-5 text-center h-100">
				<div className="row">
					<div className="col-12">
						<h3 className="m-5">Welcome</h3>
						<p className="m-5">Sharing Recipes app coming!!!!!!!!!!!!!</p>
					</div>
					<div className="col-12">
						<a href="/register" className="btn btn-primary m-3">
							Register
						</a>
						<a href="/login" className="btn btn-secondary m-3">
							Login
						</a>
						{/* <Link to="/register" className="btn btn-primary m-3">
							Register
						</Link> */}
						{/* <Link to="/login" className="btn btn-secondary m-3">
							Log In
						</Link> */}
					</div>
				</div>
			</div>
		);
	}
}
export default Landing;
