import {
  ActionReducerMap
} from '@ngrx/store';

import * as userReducer from './users.reduser';

export interface State {
  user: userReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  user: userReducer.reducer,
};

