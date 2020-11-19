import { SET_LOGIN_USER } from "../action-types";

const LOGIN_URL = '/sample/login'

export const loginUser = ({ userName, password }) => {
    return async (dispatch) => {
        const loggedInUser = await fetch(LOGIN_URL, {
            method: 'POST',
            body: JSON.stringify({
                userName,
                password
            })
        });
        if (loggedInUser) {
            dispatch({
                type: SET_LOGIN_USER,
                loggedInUser
            })
        }
    }
}
