import * as React from "react";
import Moment from "react-moment";
import LazyLoad from "react-lazyload";

// Components
import { CardText, CardBody } from "reactstrap";

// Styles
import {
  Container,
  Heading,
  TextCount,
  ResultsWrapper,
  ResultItem,
  ImageWrapper,
  Image,
  StyledTitle,
  Label,
  StyledCard,
} from "./results.styles";

// Interfaces
import { IMovie } from "../../interfaces/movie.interface";

interface IProps {
  isSubmitted?: boolean;
  data: IMovie[];
}

function Results({ data, isSubmitted }: IProps) {
  const [movies, setMovies] = React.useState(data);

  React.useEffect(() => {
    setMovies(data);
  }, [data]);

  return (
    <Container>
      {isSubmitted ? (
        <Heading className="results-title">
          {`Both actors starred in ${data.length} movies together!`}
        </Heading>
      ) : null}

      <ResultsWrapper>
        {movies?.map((item, index) => (
          <ResultItem key={`${item.id}${index}`} className="result-item">
            <StyledCard className="result-item-card">
              <LazyLoad once>
                <ImageWrapper>
                  <Image
                    className="result-item-img"
                    width="100%"
                    src={item.poster_path}
                    alt={item.title}
                  />
                </ImageWrapper>
              </LazyLoad>
              <CardBody>
                <StyledTitle tag="h5">{item.title}</StyledTitle>
                <CardText className="result-item-text">
                  <Label>Rating:</Label> {item.vote_average}
                </CardText>
                <CardText className="result-item-text">
                  <Label>Release:</Label>{" "}
                  <Moment date={item.release_date} format="DD MMM YYYY" />
                </CardText>
              </CardBody>
            </StyledCard>
          </ResultItem>
        ))}
      </ResultsWrapper>
    </Container>
  );
}

export default Results;
