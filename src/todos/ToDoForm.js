import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "./actions";
import styled from "styled-components";

const TodoForm = styled.div`
	border-radius: 8px;
	padding: 16px;
	text-align: center;
	box-shadow: 0 4px 8px grey;
`;

const TodoInput = styled.input`
	font-size: 16px;
	padding: 8px;
	border: none;
	border-bottom: 2px solid #ddd;
	border-radius: 8px;
	width: 70%;
	outline: none;
`;

const TodoButton = styled.button`
	font-size: 16px;
	padding: 8px;
	border: none;
	border-radius: 8px;
	outline: none;
	cursor: pointer;
	margin-left: 8px;
	width: 20%;
	background-color: #22ee22;
`;

const NewTodoForm = ({ todos, onCreatePressed }) => {
	const [inputValue, setInputValue] = useState("");

	return (
		<TodoForm>
			<TodoInput
				className="new-todo-input"
				type="text"
				placeholder="Type your new todo here"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<TodoButton
				onClick={() => {
					const isDuplicateText = todos.some(
						(todo) => todo.text === inputValue
					);
					if (!isDuplicateText) {
						onCreatePressed(inputValue);
						setInputValue("");
					}
				}}
				className="new-todo-button"
			>
				Create Todo
			</TodoButton>
		</TodoForm>
	);
};

const mapStateToProps = (state) => ({
	todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
	onCreatePressed: (text) => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
