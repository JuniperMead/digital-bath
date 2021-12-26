import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <Fragment>
      <Row className="navbar" noGutters>
        <Col xs={4}>
          <a
            href="https://www.linkedin.com/in/jin-hoe-lim/"
            className="navbarItem"
          >
            L I N K E D I N
          </a>
        </Col>
        <Col xs={4}>
          {location.pathname == "/" ? (
            <Link to="/experience" className="navbarItem">
              E X P E R I E N C E
            </Link>
          ) : (
            <Link to="/" className="navbarItem">
              H O M E
            </Link>
          )}
        </Col>
        <Col xs={4}>
          <a href="https://github.com/junipermead" className="navbarItem">
            G I T H U B
          </a>
        </Col>
        <Col xs={0} />
      </Row>
    </Fragment>
  );
};
export default Navbar;
