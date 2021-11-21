import { ActionType } from '../actionTypes';

interface LoginUserRequestAction {
  type: ActionType.LOGIN_USER_REQUEST;
}
interface LoginUserSuccessAction {
  type: ActionType.LOGIN_USER_SUCCESS;
  payload: string;
}
interface LoginUserErrorAction {
  type: ActionType.LOGIN_USER_ERROR;
  payload: string;
}

export type Action =
  | LoginUserRequestAction
  | LoginUserSuccessAction
  | LoginUserErrorAction;
