import React from "react";
import styled from "styled-components";
import TodoList from "./todos/ToDoList";

const AppContainer = styled.div`
	margin: 1rem;
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	color: #1e1e1e;
	width: 100vw;
	height: 100vh;
`;
function App() {
	return (
		<AppContainer>
			<TodoList />
		</AppContainer>
	);
}

export default App;
