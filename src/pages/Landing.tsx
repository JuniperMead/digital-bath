import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/Landing.css";
import constants from "../utils/constants";

interface IProps {}

interface IState {
  isDesktop: boolean;
  isTablet: boolean;
}

class Landing extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isDesktop: false,
      isTablet: false,
    };
  }

  componentDidMount() {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    this.setState({
      isDesktop: window.matchMedia(
        "(min-width: " + constants.desktopWidth + "px)"
      ).matches,
      isTablet: window.matchMedia(
        "(min-width: " +
          constants.tabletWidth +
          "px) and (max-width: " +
          (constants.desktopWidth - 1) +
          "px)"
      ).matches,
    });

    window.addEventListener("resize", () => {
      this.setState({
        isDesktop: window.matchMedia(
          "(min-width: " + constants.desktopWidth + "px)"
        ).matches,
        isTablet: window.matchMedia(
          "(min-width: " +
            constants.tabletWidth +
            "px) and (max-width: " +
            (constants.desktopWidth - 1) +
            "px)"
        ).matches,
      });
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () => {
      this.setState({
        isDesktop: window.matchMedia(
          "(min-width: " + constants.desktopWidth + "px)"
        ).matches,
        isTablet: window.matchMedia(
          "(min-width: " +
            constants.tabletWidth +
            "px) and (max-width: " +
            (constants.desktopWidth - 1) +
            "px)"
        ).matches,
      });
    });
  }

  render() {
    return (
      <Fragment>
        <Container className="sectionProfile" fluid>
          <div className="name">Jin Hoe Lim</div>
          <div className="subtitle">Software Engineer | BCompSci</div>
          <div className="location">KUL → MEL</div>
        </Container>
        <Container className="sectionSkills" fluid>
          <Row>
            <Col xs={2} sm={3} />
            <Col xs={4} sm={3}>
              <Row>
                <Col>TypeScript</Col>
              </Row>
              <Row>
                <Col>React</Col>
              </Row>
              <Row>
                <Col>Fastify</Col>
              </Row>
              <Row>
                <Col>AWS</Col>
              </Row>
              <Row>
                <Col>Serverless</Col>
              </Row>
              <Row>
                <Col>MongoDB</Col>
              </Row>
              <Row>
                <Col>IoT</Col>
              </Row>
              <Row>
                <Col>Java</Col>
              </Row>
            </Col>
            <Col xs={4} sm={3}>
              <Row>
                <Col>Node.js</Col>
              </Row>
              <Row>
                <Col>React Native</Col>
              </Row>
              <Row>
                <Col>Express</Col>
              </Row>
              <Row>
                <Col>Azure</Col>
              </Row>
              <Row>
                <Col>Docker</Col>
              </Row>
              <Row>
                <Col>MySQL</Col>
              </Row>
              <Row>
                <Col>Swagger</Col>
              </Row>
              <Row>
                <Col>Kotlin</Col>
              </Row>
            </Col>
            <Col xs={2} sm={3} />
          </Row>
        </Container>
        <Container className="sectionContact" fluid>
          <a href="mailto:jin_hoe@outlook.com">contact</a>
        </Container>
      </Fragment>
    );
  }
}

export default Landing;
