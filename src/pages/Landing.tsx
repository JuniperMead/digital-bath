import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/Landing.css";
import constants from "../utils/constants";

interface IProps {}

interface IState {
  isDesktop: boolean;
  isTablet: boolean;
  name: string;
}

class Landing extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isDesktop: false,
      isTablet: false,
      name: "Jin Hoe Lim",
    };
  }

  toggleName = () => {
    this.setState({
      name: this.state.name === "Jin Hoe Lim" ? "林 仁 和" : "Jin Hoe Lim",
    });
  };

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
      <div
        style={{
          minHeight: "100vh",
          width: "100vw",
        }}
      >
        <Container className="sectionProfile" fluid>
          <Row>
            <Col xs={1} md={3} />
            <Col xs={10} md={6}>
              <div className="name">
                <button
                  className="nameButton"
                  onClick={() => this.toggleName()}
                >
                  {this.state.name}
                </button>
              </div>
              <div className="subtitle">Software Engineer | BCompSci</div>
              <div className="location">KUL→ MEL</div>
            </Col>
            <Col xs={1} md={6} />
          </Row>
        </Container>
        <Container className="sectionSkills" fluid>
          <Row>
            <Col xs={2} sm={3} xl={4} />
            <Col xs={4} sm={3} xl={2} className="skills">
              TypeScript
              <br />
              React
              <br />
              Fastify
              <br />
              AWS
              <br />
              Serverless
              <br />
              MongoDB
              <br />
              Realm
              <br />
              Java
            </Col>
            <Col xs={4} sm={3} xl={2} className="skills">
              Node.js
              <br />
              React Native
              <br />
              Express
              <br />
              Azure
              <br />
              Docker
              <br />
              MySQL
              <br />
              IoT
              <br />
              Kotlin
            </Col>
            <Col xs={2} sm={3} xl={4} />
          </Row>
        </Container>
        <Container className="sectionSkills" fluid>
          <Row>
            <Col xs={1} sm={2} xl={3} />
            <Col xs={10} sm={8} xl={6} className="skills">
              <br />
              <br />
              <Row>
                <Col className="subtitle">
                  Wallace Corporation
                </Col>
              </Row>
              <Row>
                <Col className="skills">
                  Full Stack Software Engineer
                  <br />
                  Dec 2020 - Present
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col className="subtitle">
                  Swinburne University
                </Col>
              </Row>
              <Row>
                <Col className="skills">
                  Technical Project Assistant
                  <br />
                  Mar 2020 - Dec 2020
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col className="subtitle">
                  Swinburne University
                </Col>
              </Row>
              <Row>
                <Col className="skills">
                  Gamification Technology Officer
                  <br />
                  Mar 2019 - Mar 2020
                </Col>
              </Row>
            </Col>
            <Col xs={1} sm={2} xl={3} />
          </Row>
        </Container>
        <Container className="sectionContact" fluid>
          <a
            className="contactLink"
            href="https://digital-bath.s3.ap-southeast-2.amazonaws.com/resume.pdf"
          >
            R É S U M É
          </a>
          <a className="contactLink" href="mailto:jin_hoe@outlook.com">
            C O N T A C T
          </a>
        </Container>
      </div>
    );
  }
}

export default Landing;
