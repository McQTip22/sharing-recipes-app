import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import Recipe from '../recipe/recipe';
import RecipeForm from '../recipe/recipeForm';

class Dashboard extends Component {
	onLogoutClick = (e) => {
		e.preventDefault();
		this.props.logoutUser();
	};
	render() {
		const { user } = this.props.auth;
		return (
			<div className="container-fluid m-5 text-center">
				<h4 className="text-center">
					<b>Hey there,</b> {user.name.split(' ')[0]}
					<p>You are logged into Sharing Recipes!!!</p>
				</h4>
				<div className="row mt-5">
					<div className="col-6">
						<Recipe />
					</div>
					<div className="col-6">
						<RecipeForm />
					</div>
				</div>
				<button onClick={this.onLogoutClick} class="btn btn-lg btn-primary">
					Logout
				</button>
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
