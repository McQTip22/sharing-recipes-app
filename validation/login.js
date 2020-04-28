const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateLoginInput(data) {
	let errors = {};

	//make empty values strings for validation
	data.email = !isEmpty(data.email) ? data.email : '';
	data.password = !isEmpty(data.password) ? data.password : '';

	//validate email
	if (Validator.isEmpty(data.email)) {
		errors.errosr.email = 'Email required';
	} else if (!Validator.isEmail(data.email)) {
		errors.email = 'Email is invalid';
	}

	//validate password
	if (Validator.isEmpty(data.password)) {
		errors.password = 'Password required';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};