import * as React from "react";

import Layout from "../layout/layout";

// Styles
import {
  Heading,
  Instructions,
  FormWrapper,
  InputWrapper,
  Input,
  Button,
} from "./search.styles";

interface IProps {
  isValid: boolean;
  hasError: boolean;
  handleChange: (input: string) => void;
  handleSubmit: () => void;
}

const instructions =
  "Please enter the name of two actors to search for movies where both appear. Enter each name seperated by a comma <b>e.g</b> <i>Al Pacino, Robert De Niro</i>";

function Search({
  handleChange,
  handleSubmit,
  isValid,
  hasError,
}: IProps): JSX.Element {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.match(/\d+/g)) {
      event.preventDefault();
    } else {
      setSearchQuery(value);
      handleChange(value);
    }
  };

  return (
    <Layout
      title={<Heading className="search-page-title">Enter Your Search</Heading>}
      sizeMd={{ size: 6, offset: 3 }}
      sizeSm={{ size: 12 }}
      sizeXs={{ size: 12 }}
    >
      <Instructions
        className="main-instructions"
        dangerouslySetInnerHTML={{ __html: instructions }}
      />
      <FormWrapper className="main-form">
        <InputWrapper>
          <Input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            className={`search-input ${hasError ? "error" : ""} ${
              isValid ? "valid" : ""
            }`}
          />
        </InputWrapper>
        <Button onClick={handleSubmit} className="search-button">
          Search
        </Button>
      </FormWrapper>
    </Layout>
  );
}

export default Search;
