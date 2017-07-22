import React, { Component} from 'react';
import { todo_data } from './dummy_data';
import List from './list.js'
import Add from './add_todo.js'


class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			list: todo_data
		}
	}

	addTodo(item){
		const { list } = this.state;

		this.setState({
			list: [item, ...list]
		});
	}

	render(){
		return(
    		<div className = "container">
       			<h1>Todo List</h1>
       			<Add add={(item) => this.addTodo(item)} />
       			<List list={this.state.list} />
    		</div>
    	);
	}
}

export default App;
