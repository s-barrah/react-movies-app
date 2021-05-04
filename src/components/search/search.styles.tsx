import styled from "styled-components";

export const Heading = styled.h3`
  text-align: center;
  letter-spacing: 1px;
`;

export const Instructions = styled.div`
  margin-bottom: 8px;
`;

export const ItemsContainer = styled.div`
 display: flex
 flex-flow: row wrap;
 margin-bottom: 8px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-flow: column wrap;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 80%;
  justify-content: space-between;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #9dafbd;
  padding: 0 30px 0 8px;
  box-sizing: border-box;
  transition: all 0.2ms ease-in;

  &::placeholder {
    font-weight: 500;
    color: $timberwolves;
    margin-top: 11px;
    margin-bottom: 11px;
    margin-left: 16px;
  }
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 8px;
  }
  &:focus {
    outline-style: none;
    box-shadow: none;
    border-color: #00182e;
  }
  &.error {
    border: 2px solid #9f1300;

    &:focus {
      border-color: #9f1300;
    }
  }
  &.valid {
    border: 1px solid #167c3f;

    &:focus {
      border-color: #167c3f;
    }
  }
`;

export const Button = styled.button`
  height: 40px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  display: flex;
  cursor: pointer;
  border-radius: 3px;
  padding: 8px 16px;
  background-color: #37589a;
  color: #ffffff;
  &:hover {
    background-color: #1d2636;
  }
  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 8px;
  }
`;
