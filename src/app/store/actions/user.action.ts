import {Action} from '@ngrx/store';
import {User} from '../../models/users.model';



export namespace USER_ACTION {
  export const SET_USERS_ACTION = 'SET_USER_ACTION';
}
export class SetUserItem implements Action {
  readonly type = USER_ACTION.SET_USERS_ACTION;

  constructor(public payload: User[]) {}
}



export type UserAction = SetUserItem ;

