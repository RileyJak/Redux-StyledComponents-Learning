// reducer is a function named after what is resource in the redux store it is in charge of

// export const name = (state, action) => { // reducers take 2 arguments 1st: the current state 2nd: action
// 	const { type, payload } = action; //pulls from the action
// 	switch (type ) { // looks at type of action and decides what to do
//         case NAME_ACTION: {
//                 insert the logic and return new state
//         }
//         case NAME2_ACTION: {
//             insert the logic and return new state
//         }
//         default: {            /// what is should do when triggered and neither case is met
//           return state;   // just leave it as is
//         }
// 	}
// 	return state;
// };

import { CREATE_TODO, MARK_TODO_AS_COMPLETED, REMOVE_TODO } from "./actions";

export const todos = (state = [], action) => {
	const { type, payload } = action;

	switch (type) {
		case CREATE_TODO: {
			const { text } = payload;
			const newTodo = {
				text,
				isCompleted: false,
			};
			return state.concat(newTodo);
		}
		case REMOVE_TODO: {
			const { text } = payload;
			return state.filter((todo) => todo.text !== text);
		}
		case MARK_TODO_AS_COMPLETED: {
			const { text } = payload;
			return state.map((todo) => {
				if (todo.text === text) {
					return { ...todo, isCompleted: true };
				}
				return todo;
			});
		}
		default:
			return state;
	}
};
