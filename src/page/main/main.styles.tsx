import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
`;

export const TopBar = styled.div`
  display: flex;
  width: 100%;
  background-color: #00182e;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
`;

export const Heading = styled.h1`
  text-align: center;
  letter-spacing: 1px;
  margin-top: 32px;
  margin-bottom: 32px;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 8px;
  }
`;
