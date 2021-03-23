import {
  HANDLE_INPUT_CHANGE,
  UPDATE_LOADING_STATE,
  UPDATE_SUBMIT_STATE,
  UPDATE_VALIDATION_STATE,
  RESET_VALIDATION_STATE,
  FETCH_MOVIES,
  FETCH_SUGGESTIONS,
  ISearchMovieState,
  ActionTypes,
} from "./types";

export default function movieReducer(
  state: ISearchMovieState,
  action: ActionTypes
) {
  switch (action.type) {
    case HANDLE_INPUT_CHANGE:
      return {
        ...state,
        names: action.value,
      };
    case UPDATE_LOADING_STATE:
      return {
        ...state,
        isLoading: action.loading,
      };
    case UPDATE_SUBMIT_STATE:
      return {
        ...state,
        submitted: action.submitted,
      };
    case UPDATE_VALIDATION_STATE:
      return {
        ...state,
        isValid: action.valid,
        hasError: !action.valid,
      };
    case RESET_VALIDATION_STATE:
      return {
        ...state,
        names: "",
        isValid: false,
        hasError: false,
      };
    case FETCH_MOVIES:
      return {
        ...state,
        data: action.payload,
      };
    case FETCH_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.payload,
      };
    default:
      return state;
  }
}
