import * as React from "react";

// Components
import Search from "../../components/search/search";
import Results from "../../components/results/results";

// Styles
import { Container, TopBar, Heading } from "./main.styles";

// Actions
import movieActions from "../../store/actions";

// Reducers
import movieReducer from "../../store/reducers";

function Main() {
  // Initial state
  const [mainState, dispatch] = React.useReducer(movieReducer, {
    names: "",
    hasError: false,
    isValid: false,
    isLoading: false,
    data: [],
    suggestions: [],
    submitted: false,
  });

  // Get States
  const { names, hasError, isValid, isLoading, data, submitted } = mainState;

  // Get Actions
  const { handleFormSubmit, handleInputChange } = movieActions(dispatch);

  async function handleSubmit() {
    handleFormSubmit(names).then();
  }

  return (
    <Container className="main-container">
      <TopBar className="main-bar">
        <Heading className="main-title">
          {" "}
          Welcome to your movies search page
        </Heading>
      </TopBar>
      <Search
        isValid={isValid}
        hasError={hasError}
        handleChange={handleInputChange}
        handleSubmit={handleSubmit}
      />

      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <Results isSubmitted={submitted} data={data} />
      )}
    </Container>
  );
}

export default Main;
