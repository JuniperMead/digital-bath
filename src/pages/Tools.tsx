import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../styles/Tools.css";

interface IProps {}

interface IState {}

class Tools extends React.Component<IProps, IState> {
  render() {
    return (
      <div style={{
        minHeight: "100vh",
        width: "100vw",
      }}>
        <Container className="sectionTools" fluid>
          <div className="comingSoon">Coming Soon</div>
          <Link to="/" className="returnButton">return</Link>
        </Container>
      </div>
    );
  }
}

export default Tools;
