import styled from "styled-components";
import { CardTitle, Card, CardBody } from "reactstrap";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 16px;
  padding: 16px;
  width: 100%;
`;

export const Heading = styled.h1`
  text-align: center;
  letter-spacing: 3px;
  margin-top: 8px;
  margin-bottom: 32px;
`;

export const TextCount = styled.p`
  text-align: center;
  letter-spacing: 3px;
`;

export const ResultsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    justify-content: center;
    flex-flow: column nowrap;
  }
`;

export const ResultItem = styled.div`
  width: 15%;
  margin: 0 8px 8px 0;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
    margin: 8px 0;
  }
`;

export const ImageWrapper = styled.div`
  height: 480px;
  overflow: hidden;
  position: relative;
`;

export const Image = styled.img`
  min-height: 480px;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledCard = styled(Card)`
  height: 600px
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 1px 3px 0 rgba(63, 63, 68, 0.15),
  0 0 0 1px rgba(63, 63, 68, 0.05);
`;

export const StyledTitle = styled(CardTitle)`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Label = styled.label`
  font-weight: 600;
`;
