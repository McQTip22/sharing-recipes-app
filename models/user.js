const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Recipe = require('./recipe');

const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	// recipes created by user
	recipes: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Recipe'
		}
	]
	// saved recepies scema (connect to others recipe names)
});
const User = mongoose.model('users', UserSchema);
module.exports = User;
