import { Action } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';

export const LOAD_TUTORIAL = '[TUTORIAL] Load';
export const LOAD_TUTORIAL_SUCCESS = '[TUTORIAL] Load success';
export const ADD_TUTORIAL = '[TUTORIAL] Add';
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove';

export class LoadTutorial implements Action {
  readonly type = LOAD_TUTORIAL;

  constructor() {}
}

export class LoadTutorialSuccess implements Action {
  readonly type = LOAD_TUTORIAL_SUCCESS;

  constructor(public payload: Tutorial[]) {}
}

export class AddTutorial implements Action {
  readonly type = ADD_TUTORIAL;

  constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
  readonly type = REMOVE_TUTORIAL;

  constructor(public payload: number) {}
}

export type Actions =
  | LoadTutorial
  | LoadTutorialSuccess
  | AddTutorial
  | RemoveTutorial;
