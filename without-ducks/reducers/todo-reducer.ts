import { SET_TODO_LIST } from '../action-types'

const initialState = {
    "list": []
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO_LIST:
            return {
                ...state,
                list: action.todos
            }
        default:
            return state;
    }
}
