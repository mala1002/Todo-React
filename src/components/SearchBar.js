import React from "react";

const SearchBar = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<input placeholder="Add some tasks" />
			<button>+</button>
		</form>
	);
};

export default SearchBar;
