import React, { Component } from 'react';

class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			ingredients: '',
			instructions: '',
			notes: ''
		};
		// this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	// handleChange(e) {
	// 	this.setState({
	// 		name: e.target.value,
	// 		ingredients: e.target.value,
	// 		instructions: e.target.value,
	// 		notes: e.target.value
	// 	});
	// }

	handleSubmit(event) {
		event.preventDefault();
		const inputs = event.target.getElementsByTagName('input');
		this.setState({
			name: inputs.name.value,
			instructions: inputs.instructions.value,
			ingredients: inputs.ingredients.value,
			notes: inputs.notes.value
		});
		alert(this.state.value);
	}
	render() {
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit}>
					<label>
						Recipe Title:
						<input name="name" type="text" />
					</label>
					<label>
						Ingredients:
						<input name="ingredients" type="text" />
					</label>
					<label>
						Instructions:
						<input name="instructions" type="text" />
					</label>
					<label>
						Notes:
						<input name="notes" type="text" />
					</label>
					<input className="btn btn-primary" type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default TodoForm;
