import * as React from "react";
import styled from "styled-components";
import { Card, CardBody, CardHeader, Col, Container } from "reactstrap";

interface ISize {
  [index: string]: number;
}

interface IProps {
  title: string | JSX.Element;
  sizeMd: ISize;
  sizeSm: ISize;
  sizeXs: ISize;
}

const StyledCol = styled(Col)`
  padding-right: 0px;
  padding-left: 0px;
`;

const Layout: React.FC<IProps> = ({
  children,
  title,
  sizeMd,
  sizeSm,
  sizeXs,
  ...props
}) => {
  return (
    <div className="animated fadeIn">
      <Container>
        <StyledCol md={sizeMd} sm={sizeSm} xs={sizeXs}>
          <Card>
            <CardHeader> {title} </CardHeader>
            <CardBody> {children} </CardBody>
          </Card>
        </StyledCol>
      </Container>
    </div>
  );
};

export default Layout;
