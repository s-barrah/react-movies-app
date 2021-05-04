import * as React from "react";

// Icons
import { Close } from "../icons";

// Styles
import { ItemContainer, Text, Icon } from "./text-input-item.styles";

interface IProps {
  text: string;
  handleItemRemove: (val: string) => void;
}

function TextInputItem({ text, handleItemRemove }: IProps) {
  return (
    <ItemContainer>
      <Text className="item">{text}</Text>
      <Icon
        onClick={() => handleItemRemove(text)}
        onKeyPress={() => handleItemRemove(text)}
        className="icon"
      >
        <Close width={10} height={10} />
      </Icon>
    </ItemContainer>
  );
}

export default TextInputItem;
