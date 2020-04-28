import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
class Dashboard extends Component {
	onLogoutClick = (e) => {
		e.preventDefault();
		this.props.logoutUser();
	};
	render() {
		const { user } = this.props.auth;
		return (
			<div className="container-fluid m-5">
				<div className="row">
					<div className="col-12 text-center">
						<h4>
							<b>Hey there,</b> {user.name.split(' ')[0]}
							<p>You are logged into Sharing Recipes!!!</p>
						</h4>
						<button onClick={this.onLogoutClick} class="btn btn-lg btn-primary">
							Logout
						</button>
					</div>
				</div>
			</div>
		);
	}
}

Dashboard.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
