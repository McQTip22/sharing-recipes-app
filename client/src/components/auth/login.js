import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import classnames from 'classnames';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			errors: {}
		};
	}

	componentDidMount() {
		// If logged in and user navigates to Login page, should redirect them to dashboard
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push('/dashboard'); // push user to dashboard when they login
		}
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			});
		}
	}

	onChange = (e) => {
		this.setState({ [e.target.id]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		const userData = {
			email: this.state.email,
			password: this.state.password
		};

		this.props.loginUser(userData);
	};

	render() {
		const { errors } = this.state;
		return (
			<div class="container-fluid text-center mt-5">
				<div class="row">
					<div class="col-12">
						<h4>
							<b>Login</b> below
						</h4>
						<p class="grey-text text-darken-1">
							Don't have an account?
							<Link to="/register" class="btn btn-secondary btn-sm mx-2">
								Register
							</Link>
						</p>
					</div>
					<div className="col-12">
						<form noValidate onSubmit={this.onSubmit}>
							<div className="form-group">
								<input
									onChange={this.onChange}
									value={this.state.email}
									error={errors.email}
									id="email"
									type="email"
									class="form-control-lg mx-5"
									placeholder="Email"
									className={classnames('', {
										invalid: errors.email || errors.emailnotfound
									})}
								/>
								<span class="text-danger">
									{errors.email}
									{errors.emailnotfound}
								</span>
							</div>
							<div className="form-group">
								<input
									onChange={this.onChange}
									value={this.state.password}
									error={errors.password}
									id="password"
									type="password"
									class="form-control-lg mx-5"
									placeholder="Password"
									className={classnames('', {
										invalid: errors.password || errors.passwordincorrect
									})}
								/>
								<span class="text-danger">
									{errors.password}
									{errors.passwordincorrect}
								</span>
							</div>
							<button type="submit" class="btn btn-primary btn-lg">
								Login
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
