import React, { Component } from 'react';
import Ingredients from './ingredients';
import Instructions from './instructions';

class Recipe extends Component {
	render() {
		return (
			<div className="recipe container">
				<h1>recipe name</h1>
				<ul>
					<Ingredients />
				</ul>
				<ol>
					<Instructions />
				</ol>
				<p>*Notes</p>
			</div>
		);
	}
}

export default Recipe;
