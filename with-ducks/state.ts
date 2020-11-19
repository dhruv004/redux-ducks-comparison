import { UserState } from './ducks/user';
import { TodoState } from './ducks/todo';

export interface GlobalState {
    todo: TodoState
    user: UserState
}