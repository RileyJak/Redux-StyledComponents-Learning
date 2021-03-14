import React from "react";
import { connect } from "react-redux";
import ToDoListItem from "./ToDoListItem";
import ToDoForm from "./ToDoForm";
import { removeTodo, markTodoAsCompleted } from "./actions";
import styled from "styled-components";

// === STYLED COMPONENT SYNTAX ===
// const BigRedText = styled.{html element}`
// 	font-size: 48px;
// 	color: #ff0000;
// `;

const ListWrapper = styled.div`
	max-width: 700px;
	margin: auto;
`;

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => (
	<ListWrapper>
		<ToDoForm />
		{todos.map((todo) => (
			<ToDoListItem
				todo={todo}
				onRemovePressed={onRemovePressed}
				onCompletedPressed={onCompletedPressed}
			/>
		))}
	</ListWrapper>
);

const mapStateToProps = (state) => ({
	todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
	onRemovePressed: (text) => dispatch(removeTodo(text)),
	onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
