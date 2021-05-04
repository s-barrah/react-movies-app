import * as React from "react";

import Layout from "../layout/layout";
import TextInputItem from "../text-input-item/text-input-item";

// Styles
import {
  Heading,
  Instructions,
  ItemsContainer,
  FormWrapper,
  InputWrapper,
  Input,
  Button,
} from "./search.styles";

interface IProps {
  items: string[];
  isValid: boolean;
  hasError: boolean;
  handleChange: (input: string) => void;
  handleSubmit: () => void;
  handleAddInputItem: () => void;
  handleRemoveInputItem: (val: string) => void;
}

const keyCodes = [",", "Enter"];
const instructions =
  "Please enter the name of two actors to search for movies where both appear. Enter each name seperated by a comma <b>e.g</b> <i>Al Pacino, Robert De Niro</i>";

function Search({
  items,
  handleChange,
  handleSubmit,
  isValid,
  hasError,
  handleAddInputItem,
  handleRemoveInputItem,
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

  const handleKeyPress = (event: React.KeyboardEvent) => {
    console.log("HANDLE KEY PRESS --- event.charCode: ", event.charCode);
    console.log("HANDLE KEY PRESS --- event.key: ", event.key);
    if (keyCodes.includes(event.key)) {
      event.preventDefault();
      handleAddInputItem();
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
      <ItemsContainer className="items-container">
        {items.map((item, key) => (
          <TextInputItem
            key={key}
            text={item}
            handleItemRemove={handleRemoveInputItem}
          />
        ))}
      </ItemsContainer>
      <FormWrapper className="main-form">
        <InputWrapper>
          <Input
            type="text"
            name="search-input"
            value={searchQuery}
            onChange={handleInputChange}
            /*onKeyPress={handleKeyPress}*/
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
