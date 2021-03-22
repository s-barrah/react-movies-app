export const HANDLE_INPUT_CHANGE = "HANDLE_INPUT_CHANGE";
export const UPDATE_LOADING_STATE = "UPDATE_LOADING_STATE";
export const UPDATE_SUBMIT_STATE = "UPDATE_SUBMIT_STATE";
export const UPDATE_VALIDATION_STATE = "UPDATE_VALIDATION_STATE";
export const RESET_VALIDATION_STATE = "RESET_VALIDATION_STATE";
export const GET_DATA = "GET_DATA";

import { IMovie } from "../interfaces/movie.interface";
import { IActor } from "../interfaces/actor.interface";

export interface ISearchMovieState {
  names: string;
  hasError: boolean;
  isValid: boolean;
  isLoading: boolean;
  data: IMovie[];
  suggestions?: IActor[];
  submitted?: boolean;
}

export interface IInputAction {
  type: typeof HANDLE_INPUT_CHANGE;
  names: string;
}

export interface IValidateAction {
  type: typeof UPDATE_VALIDATION_STATE;
  valid: boolean;
}

export interface IResetValidateAction {
  type: typeof RESET_VALIDATION_STATE;
}

export interface ILoadingAction {
  type: typeof UPDATE_LOADING_STATE;
  loading: boolean;
}

export interface ISubmitAction {
  type: typeof UPDATE_SUBMIT_STATE;
  submitted: boolean;
}

export interface IGetAction {
  type: typeof GET_DATA;
  payload: IMovie[];
}

export type ActionTypes =
  | IInputAction
  | IValidateAction
  | IResetValidateAction
  | ILoadingAction
  | ISubmitAction
  | IGetAction;
