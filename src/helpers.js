export const tasks = [
	"Some task",
	"Another task",
	"And another task",
	"Something cool staff"
];

export const deleteTodo = (array, value) => {
	const index = array.indexOf(value);

	array.splice(index, 1);
	return array;
};
