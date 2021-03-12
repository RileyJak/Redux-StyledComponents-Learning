// === action type ===
// export const NAME_ACTION = "NAME_ACTION";
// === action creator ===
// export const nameAction = (identifier) => ({
//     type: NAME_ACTION,
//     payload: { identifier };
// });

export const CREATE_TODO = "CREATE_TODO";
export const createTodo = (text) => ({
	type: CREATE_TODO,
	payload: { text },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (text) => ({
	type: REMOVE_TODO,
	payload: { text },
});
