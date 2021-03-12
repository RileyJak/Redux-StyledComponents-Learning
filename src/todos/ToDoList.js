import React from "react";
import { connect } from "react-redux";
import ToDoListItem from "./ToDoListItem";
import ToDoForm from "./ToDoForm";
import { removeTodo } from "./actions";
import "./ToDoList.css";

const TodoList = ({ todos = [], onRemovePressed }) => (
	<div className="list-wrapper">
		<ToDoForm />
		{todos.map((todo) => (
			<ToDoListItem todo={todo} onRemovePressed={onRemovePressed} />
		))}
	</div>
);

const mapStateToProps = (state) => ({
	todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
	onRemovePressed: (text) => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
