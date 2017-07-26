import React, { Component } from 'react';

class Add extends Component {
	constructor(props){
		super(props);

		this.state = {
			form: {
				title: '',
				details: ''
			}
		}
	}

	handleChange(e){
		const { value, name } = e.target;
		const { form } = this.state;

		form[name] = value;

		this.setState({
			form: {...form}
		});

	}

	addItem(e){
		e.preventDefault();
		const { form } = this.state;

		this.props.add({...form});

		this.setState({
			form: {
				title: '',
				details: ''
			}
		})

	}

	render () {
		const { form } = this.state;

		return (
			<div className="my-3">
				<form onSubmit ={(e) => this.addItem(e)} className="form-inline">

					<div className="form-group">
						<label>Title:</label>
						<input name="title" onChange ={(e) => this.handleChange(e)} value={form.title} className = "form-control mx-3"/>
					</div>
					<div className="form-group">
						<label>Details:</label>
						<input name = "details" onChange ={(e) => this.handleChange(e)} value={form.details} className = "form-control mx-3"/>
					</div>
					<button className="btn btn-primary">Add Item</button>

				</form>
			</div>
		)
	}
}
export default Add;