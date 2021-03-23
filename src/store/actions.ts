import * as React from "react";

// Utils
import fetchGraphQL from "../utils/fetch";
import { isValidSearch } from "../utils/util";

// Types
import {
  HANDLE_INPUT_CHANGE,
  UPDATE_LOADING_STATE,
  FETCH_MOVIES,
  FETCH_SUGGESTIONS,
  UPDATE_VALIDATION_STATE,
  RESET_VALIDATION_STATE,
  UPDATE_SUBMIT_STATE,
  ActionTypes,
} from "./types";

// Interfaces
import { IMovie } from "../interfaces/movie.interface";
import { IActor } from "../interfaces/actor.interface";

const findMoviesQuery = (names = "") => `query {
  findMoviesByActors(names: "${names}") {
    movies {
     title
     poster_path
     vote_average
    }
  }
}`;

const findSuggestionsQuery = (name = "") => `query {
  getSuggestedActors(name: "${name}") {
    actors {
     id
     name
    }
  }
}`;

const GRAPHQL_ENDPOINT = process.env.REACT_APP_GRAPHQL_ENDPOINT;

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
      await fetchMovies(names);
    } else {
      updateValidationState(false);
    }
  }

  async function fetchMovies(names: string) {
    updateLoadingState(true);
    try {
      const response = await fetchGraphQL(
        findMoviesQuery(names),
        GRAPHQL_ENDPOINT
      );
      updateLoadingState(false);
      const {
        status,
        message,
        data: { movies },
      } = response?.data;
      if (status === "Success" && message === "Success") {
        getMovies(movies);
        resetValidationState();
      }
    } catch (error) {
      updateLoadingState(false);
    }
  }

  function handleInputChange(value: string) {
    if (value) {
      dispatch({ type: HANDLE_INPUT_CHANGE, value });
      fetchSuggestions(value).then();
    } else {
      resetValidationState();
    }
  }

  function getMovies(data: IMovie[]) {
    dispatch({ type: FETCH_MOVIES, payload: data });
  }

  async function fetchSuggestions(name: string) {
    try {
      const response = await fetchGraphQL(
        findSuggestionsQuery(name),
        GRAPHQL_ENDPOINT
      );
      const {
        status,
        message,
        data: { actors },
      } = response?.data;
      if (status === "Success" && message === "Success") {
        getSuggestions(actors);
      }
    } catch (error) {
      console.log("fetchSuggestions --- error: ", error);
    }
  }

  function getSuggestions(data: IActor[]) {
    dispatch({ type: FETCH_SUGGESTIONS, payload: data });
  }

  return {
    handleFormSubmit,
    handleInputChange,
  };
}
