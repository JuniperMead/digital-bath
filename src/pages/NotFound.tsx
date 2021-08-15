import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../styles/NotFound.css";

interface IProps {}

interface IState {}

class NotFound extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Container className="section404" fluid>
          <div className="comingSoon">404</div>
          <Link to="/" className="returnButton">Home</Link>
        </Container>
      </Fragment>
    );
  }
}

export default NotFound;
