import styled from "styled-components";

export const ItemContainer = styled.span`
  padding: 8px;
  background: #ecd0cc;
  margin-right: 8px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #9f1300;
  }
`;

export const Text = styled.span`
  margin-right: 16px;
`;

export const Icon = styled.span`
  position: relative;
  width: 10px;
  height: 10px;
  cursor: pointer;

  svg {
    position: absolute;
    top: 0px;
    right: 0px;
  }
`;
