const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	user: {
		type: String,
		required: false
	},
	//will link to it won schema
	ingredients: {
		type: String,
		required: false
	},
	//will link to it won schema
	instructions: {
		type: String,
		required: false
	},
	notes: {
		type: String,
		required: false
	},
	// pictureUrl: {
	// 	type: String,
	// 	required: false
	// },
	date: {
		type: Date,
		default: Date.now
	}
});

//requires a pre remove function

const Recipe = mongoose.model('recipes', UserSchema);
module.exports = Recipe;
