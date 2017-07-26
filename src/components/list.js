import React from 'react';
import { todo_data } from './dummy_data';
import './style.css';

export default props => {

const list = props.list.map((item, index) => {
	return <li className="list-group-item" key={index}>{item.title}
			<span onClick={() => props.onDelete(item._id)} id="button" className="btn btn-danger">Delete</span>
		</li>

})
	return(
		<div>
			<ul className ='list-group'>
			{list}
			</ul>
		</div>
	);
}
//add a button into the li to delete each item
//splice out of list and rebuild the state