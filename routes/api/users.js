const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
//connect validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

//connect User model
const User = require('../../models/user');

//register user
router.post('/register', (req, res) => {
	const { errors, isValid } = validateRegisterInput(req.body);

	//check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}

	User.findOne({ email: req.body.email }).then((user) => {
		if (user) {
			return res.status(400).json({ email: 'Email already Exists' });
		} else {
			const newUser = new User({
				name: req.body.name,
				email: req.body.email,
				password: req.body.password
			});

			//hash password
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) throw err;
					newUser.password = hash;
					newUser.save().then((user) => res.json(user)).catch((err) => console.log(err));
				});
			});
		}
	});
});

router.post('/login', (req, res) => {
	const { errors, isValid } = validateLoginInput(req.body);

	//check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}

	const email = req.body.email;
	const password = req.body.password;

	//find user
	User.findOne({ email }).then((user) => {
		//verify user
		if (!user) {
			return res.status(404).json({ emailnotfound: 'Email not found' });
		}

		//check password
		bcrypt.compare(password, user.password).then((isMatch) => {
			if (isMatch) {
				//create Jwt Payload
				const payload = {
					id: user.id,
					name: user.name
				};

				//sign token
				jwt.sign(
					payload,
					keys.secretOrKey,
					{
						expiresIn: 30000000
					},
					(err, token) => {
						res.json({
							success: true,
							token: 'Bearer' + token
						});
					}
				);
			} else {
				return res.status(400).json({ passwordincorrect: 'Incorrect Password' });
			}
		});
	});

	// edit user
});

module.exports = router;
