import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../styles/Tools.css";

interface IProps {}

interface IState {}

class Tools extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Container className="sectionTools" fluid>
          <div className="comingSoon">Coming Soon</div>
          <Link to="/" className="returnButton">return</Link>
        </Container>
      </Fragment>
    );
  }
}

export default Tools;
