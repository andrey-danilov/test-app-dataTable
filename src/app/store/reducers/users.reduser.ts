import {User} from '../../models/users.model';
import {USER_ACTION, UserAction} from '../actions/user.action';
import {FilterModel} from '../../models/filter.model';


export interface State  {
  users: User[];
}


export const initialState: State = {
  users: new Array<User>(),
};


export function reducer(state = initialState, action: UserAction) {
  switch (action.type) {
    case USER_ACTION.SET_USERS_ACTION:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
}
