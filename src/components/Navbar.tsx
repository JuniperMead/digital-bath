import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

interface IProps {}

interface IState {}

class Navbar extends React.Component<IProps, IState> {

  render() {
    return (
      <Fragment>
        <Row className="navbar" noGutters>
          <Col xs={6}>
            <a
              href="https://www.linkedin.com/in/jin-hoe-lim/"
              className="navbarItem"
            >
              L I N K E D I N
            </a>
          </Col>
          {/* <Col xs={4} sm={2}>
            <Link to="/Tools" className="navbarItem">
              TOOLS
            </Link>
          </Col> */}
          <Col xs={6}>
            <a href="https://github.com/junipermead" className="navbarItem">
              G I T H U B
            </a>
          </Col>
          <Col xs={0} />
        </Row>
      </Fragment>
    );
  }
}
export default Navbar;
