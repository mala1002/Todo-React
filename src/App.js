import React, { Component, Fragment } from "react";
import "./styles.css";
import SearchBar from "./components/SearchBar";
import Todos from "./components/Todos";
import Todo from "./components/Todo";
import { tasks, deleteTodo } from "./helpers";

class App extends Component {
	state = {
		todos: tasks,
		enteredText: ""
	};

	handleChange = (e) => {
		this.setState({
			enteredText: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const { todos, enteredText } = this.state;
		this.setState({
			todos: [...todos, enteredText],
			enteredText: ""
		});
	};

	handleRemove = (e) => {
		const { todos } = this.state;
		const value = e.target.dataset.value;

		this.setState({
			todos: deleteTodo(todos, value)
		});
	};

	render() {
		const { todos, enteredText } = this.state;

		return (
			<Fragment>
				<SearchBar
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
					enteredText={enteredText}
				/>
				<Todos>
					{todos.map((todo, index) => (
						<Todo
							index={index + 1}
							name={todo}
							key={index}
							handleRemove={this.handleRemove}
						/>
					))}
				</Todos>
			</Fragment>
		);
	}
}

export default App;
