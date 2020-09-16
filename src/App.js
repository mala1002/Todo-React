import React, { Component, Fragment } from "react";
import "./styles.css";
import SearchBar from "./components/SearchBar";
import Todos from "./components/Todos";
import Todo from "./components/Todo";

class App extends Component {
	state = {
		todos: [],
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
		const index = todos.indexOf(value);

		todos.splice(index, 1);

		this.setState({
			todos
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
