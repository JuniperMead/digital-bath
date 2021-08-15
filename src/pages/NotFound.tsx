import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../styles/NotFound.css";

interface IProps {}

interface IState {}

class NotFound extends React.Component<IProps, IState> {
  render() {
    return (
      <div style={{
        minHeight: "100vh",
        width: "100vw",
      }}>
        <Container className="section404" fluid>
          <div className="comingSoon">404</div>
          <Link to="/" className="returnButton">Home</Link>
        </Container>
      </div>
    );
  }
}

export default NotFound;
