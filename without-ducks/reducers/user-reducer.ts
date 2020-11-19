import { SET_LOGIN_USER } from '../action-types'

const initialState = {
    "currentUser": null
};

export const userReducer = (state = initialState, action) => {
    let index = -1;
    switch (action.type) {
        case SET_LOGIN_USER:
            return {
                ...state,
                currentUser: action.loggedInUser
            }
        default:
            return state;
    }
}
