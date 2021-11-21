import { ActionType } from '../actionTypes';
import { Action } from '../actions';

interface State {
  loading: boolean;
  error: string | null;
  data: string | null; //for now, this will just be logged in user
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.LOGIN_USER_REQUEST:
      return { loading: true, error: null, data: null };
    case ActionType.LOGIN_USER_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.LOGIN_USER_ERROR:
      return { loading: false, error: action.payload, data: null };
    default:
      return state;
  }
};

export default reducer;
