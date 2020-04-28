import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

class Register extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
			password2: '',
			errors: {}
		};
	}

	componentDidMount() {
		// If logged in and user navigates to Register page, should redirect them to dashboard
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
	}

	componentWillReceiveProps(nextProps) {
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

		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		};

		this.props.registerUser(newUser, this.props.history);
	};

	render() {
		const { errors } = this.state;
		return (
			<div className="container-fluid text-center mt-5">
				<div className="row">
					<div className="col-12">
						<h4>
							<b>Register</b> below
						</h4>
						<p>
							Already have an account?
							<Link to="/login" className="btn btn-secondary btn-sm mx-2">
								Log in
							</Link>
						</p>
					</div>
					<div className="col-12">
						<form noValidate onSubmit={this.onSubmit}>
							<div className="form-group">
								<input
									onChange={this.onChange}
									value={this.state.name}
									error={errors.name}
									id="name"
									type="text"
									className="form-control-lg mx-5"
									placeholder="Name"
								/>
								<span className="text-danger">{errors.name}</span>
							</div>
							<div className="form-group">
								<input
									onChange={this.onChange}
									value={this.state.email}
									error={errors.email}
									id="email"
									type="email"
									className="form-control-lg mx-5"
									placeholder="Email"
								/>
								<span className="text-danger">{errors.email}</span>
							</div>
							<div className="form-group">
								<input
									onChange={this.onChange}
									value={this.state.password}
									error={errors.password}
									id="password"
									type="password"
									className="form-control-lg mx-5"
									placeholder="Password"
								/>
								<span className="text-danger">{errors.password}</span>
							</div>
							<div className="form-group">
								<input
									onChange={this.onChange}
									value={this.state.password2}
									error={errors.password2}
									id="password2"
									type="password"
									className="form-control-lg mx-5"
									placeholder="Confirm Passowrd"
								/>
								<span class="text-danger">{errors.password2}</span>
							</div>
							<button type="submit" className="btn btn-primary btn-lg">
								Sign up
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
