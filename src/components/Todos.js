import React from "react";

const Todos = (props) => {
	return <div className="list">{props.children}</div>;
};

export default Todos;
