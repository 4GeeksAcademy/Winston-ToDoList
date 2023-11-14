import React, { useState } from "react";

//create your first component
const Home = () => {
	const [ todo, setTodo ] = useState('');
	const [ todosList, setTodosList] = useState([]);
	const handleInput = (e) => {
		setTodo(e.target.value);
	}
	const handleClick = () => {
		setTodosList(todosList.concat([todo]));
		if(todo === "") alert("The input cannot be empty");
	  };
	return (
		<div className="container ">
			<h1 className="text-center rounded my-2 p-3 mb-2 bg-info text-white">
				To Do List
			</h1>

			<input type="text" onChange={handleInput} value={todo} />
			<button type="button" className="btn btn-primary" onClick={handleClick}>Add</button>
			
			<div className="container">
				<ul className="list-group">
				{ todosList.map (( data , index) => (
					<li className="list-group-item" key={index}>
						<span> {data} </span>
					<button type="button" className="btn btn-danger">Delete</button>
				</li>
				))}
				</ul>
				<div>
					<p> {todosList.length} pending task</p>
				</div>
			</div>
		</div>
	);
};

export default Home;