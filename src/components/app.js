import React, { Component} from 'react';
import axios from 'axios';
import List from './list.js'
import Add from './add_todo.js'

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=Willie123';

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			list: []
		}
	}

	addTodo(item){
		axios.post(`${BASE_URL}/todos${API_KEY}`, item).then((resp) => {
			this.fetchTodos();
		}).catch((error) => {
			console.warn('Error adding to server', error);
		});
	}
		
	deleteTodo(id){
		console.log('item id', id);
		axios.delete(`${BASE_URL}/todos/${id + API_KEY}`).then((resp) => {
			console.log('I deleted you', resp);
			this.fetchTodos();
		})
	}

	componentWillMount(){ //mounts axios call before page loads
		this.fetchTodos();
	}

	fetchTodos(){
		axios.get(`${BASE_URL}/todos${API_KEY}`).then((resp) => {
			console.log('got resp', resp);

			this.setState({
				list: resp.data.todos
			})
		})
	}

	render(){
		return(
    		<div className = "container">
       			<h1>Todo List</h1>
       			<Add add={(item) => this.addTodo(item)} />
       			<List list={this.state.list} onDelete={(index) => this.deleteTodo(index)} />

    		</div>
    	);
	}
}

export default App;
