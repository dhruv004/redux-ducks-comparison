import { doLogin } from "../ducks/user";
import { fetchTodos } from "../ducks/todo";
import { GlobalState } from "../state"

export const setUserTodos = ({ userName, password }) => {
    return async (dispatch: ThunkDispatchType, getState: () => GlobalState) => {
        await doLogin({ userName, password });
        const { user } = getState();
        if (user.currentUser) {
            await fetchTodos(user.currentUser.userId);
        }
    }
}
