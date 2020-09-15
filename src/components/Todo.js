import React from "react";

const Todo = (props) => {
	return (
		<div className="item">
			<span>
				{props.index}. {props.name}
			</span>
			<button>X</button>
		</div>
	);
};

export default Todo;
