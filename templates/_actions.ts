import { Action } from '@ngrx/store';

export const LOAD =                 '[{{ titleCase name }}] Load';
export const LOAD_SUCCESS =         '[{{ titleCase name }}] Load Success';
export const LOAD_FAIL =            '[{{ titleCase name }}] Load Fail';

/**
 * Load {{ titleCase name }} Actions
 */
export class Load implements Action {
  readonly type = LOAD;
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: any) { }
}

export class LoadFail implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) { }
}

export type Actions =
  | Load
  | LoadSuccess
  | LoadFail;