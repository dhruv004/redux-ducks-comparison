import { dispatch } from 'redux';
import { SET_TODO_LIST } from '../action-types'

interface Todo {
    id: number;
    description: string;
    completed: boolean
}

export interface TodoState {
    list: Todo[]
}

const InitialState: TodoState = {
    list: []
}

export const fetchTodos = async (userId: number) => {
    const TODO_URL = `/sample/todo&userId=${userId}`;
    const todos = await fetch(TODO_URL).then(res => res.json());
    dispatch(setTodoList(todos))
}

const setTodoList = (list: Todo[]) => {
    return {
        type: SET_TODO_LIST as typeof SET_TODO_LIST,
        payload: {
            list
        }
    };
};

type Action = ReturnType<typeof setTodoList>;

export const todoReducer = (
    state: TodoState = InitialState,
    action: Action
): TodoState => {
    switch (action.type) {
        case SET_TODO_LIST:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};
