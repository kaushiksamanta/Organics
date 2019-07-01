import { Tutorial } from './../models/tutorial.model';
import {
  Actions,
  ADD_TUTORIAL,
  REMOVE_TUTORIAL,
  LOAD_TUTORIAL_SUCCESS,
} from '../actions/tutorial.action';

const initialState: Tutorial = {
  name: 'Initial Tutorial',
  url: 'http://google.com',
};

export function reducer(state: Tutorial[] = [initialState], action: Actions) {
  switch (action.type) {
    case ADD_TUTORIAL:
      return [...state, action.payload];
    case REMOVE_TUTORIAL:
      state.splice(action.payload, 1);
      return state;
    case LOAD_TUTORIAL_SUCCESS:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
