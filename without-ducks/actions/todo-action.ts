import { SET_TODO_LIST } from "../action-types";

export const fetchTodos = ({ userId }) => {
    return async (dispatch) => {
        const TODO_URL = `/sample/todo&userId=${userId}`;
        const todos = await fetch(TODO_URL);
        dispatch({
            type: SET_TODO_LIST,
            todos
        })
    }
}
