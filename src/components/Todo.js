import React from "react";

const Todo = (props) => {
	return (
		<div className="item">
			<p>
				{props.index}.<span> {props.name}</span>
			</p>
			<button onClick={props.handleRemove} data-value={props.name}>
				&times;
			</button>
		</div>
	);
};

export default Todo;
