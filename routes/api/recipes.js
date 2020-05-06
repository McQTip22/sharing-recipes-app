const express = require('express');
const router = express.Router();

//connect recipe model
const Recipe = require('../../models/recipe');
const User = require('../../models/user');

//create recepie
router.post('/add', (req, res) => {
	Recipe.create(req.body)
		.then(function(newRecipe) {
			res.json(newRecipe);
		})
		.catch(function(err) {
			res.send(err);
		});
});

router.get('/:recipeId', (req, res) => {
	Recipe.findById(req.params.recipeId)
		.then(function(foundRecipe) {
			res.json(foundRecipe);
		})
		.catch(function(err) {
			res.send(err);
		});
});

module.exports = router;

// post recipe

// edit recipe if owner(name, notes, picture)

// delete recipe if owner

// get recipe if owner

// get list of all recepies
