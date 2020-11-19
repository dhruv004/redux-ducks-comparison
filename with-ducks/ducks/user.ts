import { dispatch } from 'redux';
import { SET_LOGIN_USER } from '../action-types'

interface User {
    name: string;
    userId: number;
}

export interface UserState {
    currentUser: User | null
}

const InitialState: UserState = {
    currentUser: null
}

export const doLogin = async ({ userName, password }) => {
    const LOGIN_URL = '/sample/url';
    const user = await fetch(LOGIN_URL, {
        method: 'POST',
        body: JSON.stringify({
            userName,
            password
        })
    }).then(res => res.json());
    dispatch(setLoginUser(user))
}

const setLoginUser = (user: User) => {
    return {
        type: SET_LOGIN_USER as typeof SET_LOGIN_USER,
        payload: {
            user
        }
    };
};

type Action = ReturnType<typeof setLoginUser>;

export const userReducer = (
    state: UserState = InitialState,
    action: Action
): UserState => {
    switch (action.type) {
        case SET_LOGIN_USER:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};
