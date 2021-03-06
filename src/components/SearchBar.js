import React from "react";

const SearchBar = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<input
				placeholder="Add some tasks"
				onChange={props.handleChange}
				value={props.enteredText}
				required
			/>
			<button>+</button>
		</form>
	);
};

export default SearchBar;
