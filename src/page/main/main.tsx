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
    items: [],
    inputValue: "",
    hasError: false,
    isValid: false,
    isLoading: false,
    data: [],
    suggestions: [],
    submitted: false,
  });

  // Get States
  const {
    items,
    inputValue,
    hasError,
    isValid,
    isLoading,
    data,
    submitted,
  } = mainState;

  // Get Actions
  const {
    handleFormSubmit,
    handleInputChange,
    handleAddItem,
    resetValidationState,
  } = movieActions(dispatch);

  async function handleSubmit() {
    handleFormSubmit(inputValue).then();
  }

  const handleAddInputItem = () => {
    if (!items.includes(inputValue)) {
      items.concat(inputValue);
      handleAddItem(items.concat(inputValue));
      resetValidationState();
    }
  };

  const handleRemoveInputItem = (value: string) => {
    if (value) {
      const newValues = items.filter((item) => item !== value);
      handleAddItem(newValues);
    }
  };

  return (
    <Container className="main-container">
      <TopBar className="main-bar">
        <Heading className="main-title">
          {" "}
          Welcome to your movies search page
        </Heading>
      </TopBar>
      <Search
        items={items}
        isValid={isValid}
        hasError={hasError}
        handleChange={handleInputChange}
        handleSubmit={handleSubmit}
        handleAddInputItem={handleAddInputItem}
        handleRemoveInputItem={handleRemoveInputItem}
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
