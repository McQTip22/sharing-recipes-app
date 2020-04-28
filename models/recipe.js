const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

const recipeSchema = new Schema(
	{
		title: {
			type: String,
			required: true
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		}
	},
	{
		timestamps: true
	}
);

recipeSchema.pre('remove', async function(next) {
	try {
		//find user by id
		let user = await User.findById(this.user);
		//remove recipe id from user recipe list
		user.recipes.remove(this.id);
		//save that user
		await user.save();
		return next();
	} catch (err) {
		return next(err);
	}
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
