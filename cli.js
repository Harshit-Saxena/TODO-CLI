console.log('Used loadsh and yargs for this project');
// Exporting function
const fs = require('fs');


//* Add new item to todo list

var addTodo = (title) => {
    var todos = fetchTodos();
	var todo = {title};
	var duplicatetodos = todos.filter(
		(todo) => todo.title === title);
	if (duplicatetodos.length === 0) {
		todos.push(todo);
		saveTodos(todos);
		return todo;
	}
};

//* Delete an item from todo list

var deleteTodo = (title) => {
    var todos = fetchTodos();
    var filteredTodos = todos.filter(
        (todo) => todo.title !== title
    );
    saveTodos(filteredTodos);
    return todos.length !== filteredTodos.length;

}

//* Read an item from todo list

var readTodo = (title) => {
    var todos = fetchTodos();
    var filteredTodos = todos.filter(
        (todo) => todo.title === title
    );
    return filteredTodos[0];
}

//* all Todo list
var listTodos = () => {
    return fetchTodos();
}

//* Utility Functions
var fetchTodos = () => {
    try {
        var todoString = fs.readFileSync('task-data.json');
        return JSON.parse(todoString);
    } catch (err) {
        return [];
    }
};

var saveTodos = (todos) => {
    fs.writeFileSync('tasks-data.json',
		JSON.stringify(todos));
};
var logTodo = (todo) => {
    console.log('>>>>>>>>>>>-----------------<<<<<<<<<<<<<<');
    console.log(`It's title is: ${todo.title}`);
};
// Exporting function
module.exports = {
	addTodo,
	deleteTodo,
	readTodo,
	listTodos,
	logTodo
};