import * as React from "react";

// Utils
import fetchGraphQL from "../utils/fetch";
import { isValidSearch } from "../utils/util";

// Types
import {
  HANDLE_INPUT_CHANGE,
  UPDATE_LOADING_STATE,
  GET_DATA,
  UPDATE_VALIDATION_STATE,
  RESET_VALIDATION_STATE,
  UPDATE_SUBMIT_STATE,
  ActionTypes,
} from "./types";

// Interfaces
import { IMovie } from "../interfaces/movie.interface";

const findMovies = (names = "") => `{
  findMoviesByActors(names: "${names}") {
    movies {
     title
     poster_path
     vote_average
    }
  }
}`;

export default function movieActions(dispatch: React.Dispatch<ActionTypes>) {
  function updateLoadingState(state: boolean) {
    dispatch({ type: UPDATE_LOADING_STATE, loading: state });
  }

  function updateSubmitState(state: boolean) {
    dispatch({ type: UPDATE_SUBMIT_STATE, submitted: state });
  }

  function updateValidationState(state: boolean) {
    dispatch({ type: UPDATE_VALIDATION_STATE, valid: state });
  }

  function resetValidationState() {
    dispatch({ type: RESET_VALIDATION_STATE });
  }

  async function handleFormSubmit(names: string) {
    updateSubmitState(true);
    const isInputValid = isValidSearch(names);
    // TODO handle special character validation
    if (isInputValid) {
      await sendRequest(names);
    } else {
      updateValidationState(false);
    }
  }

  async function sendRequest(names: string) {
    const GRAPHQL_ENDPOINT = process.env.REACT_APP_GRAPHQL_ENDPOINT;
    updateLoadingState(true);
    try {
      const response = await fetchGraphQL(findMovies(names), GRAPHQL_ENDPOINT);
      updateLoadingState(false);
      const {
        status,
        message,
        data: { movies },
      } = response?.data;
      if (status === "Success" && message === "Success") {
        handleGetData(movies);
        resetValidationState();
      }
    } catch (error) {
      updateLoadingState(false);
    }
  }

  function handleInputChange(names: string) {
    if (names) {
      dispatch({ type: HANDLE_INPUT_CHANGE, names });
    } else {
      resetValidationState();
    }
  }

  function handleGetData(data: IMovie[]) {
    dispatch({ type: GET_DATA, payload: data });
  }

  return {
    handleFormSubmit,
    handleInputChange,
  };
}
