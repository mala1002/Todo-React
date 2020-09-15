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

	render() {
		const { enteredText } = this.state;

		return (
			<Fragment>
				<SearchBar
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
					enteredText={enteredText}
				/>
				<Todos>
					<Todo index="1" name="Some task" />
					<Todo index="2" name="Some task number two" />
				</Todos>
			</Fragment>
		);
	}
}

export default App;
