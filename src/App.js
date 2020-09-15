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

	handleSubmit = (e) => {
		e.preventDefault();
	};

	render() {
		return (
			<Fragment>
				<SearchBar handleSubmit={this.handleSubmit} />
				<Todos>
					<Todo index="1" name="Some task" />
					<Todo index="2" name="Some task number two" />
				</Todos>
			</Fragment>
		);
	}
}

export default App;
