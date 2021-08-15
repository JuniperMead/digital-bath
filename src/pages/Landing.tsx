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
    console.log("TEST");
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
      <Fragment>
        <Container className="sectionProfile" fluid>
          <Row>
            <Col xs={1} md={3}/>
            <Col xs={10} md={6}>
              <div className="name">
                <button className="nameButton" onClick={() => this.toggleName()}>
                  {this.state.name}
                </button>
              </div>
              <div className="subtitle">Software Engineer | BCompSci</div>
              <div className="location">KUL → MEL</div>
            </Col>
            <Col xs={1}  md={6}/>
          </Row>
        </Container>
        <Container className="sectionSkills" fluid>
          <Row>
            <Col xs={2} sm={3} xl={4} />
            <Col xs={4} sm={3} xl={2}>
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
            <Col xs={4} sm={3} xl={2}>
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
            <Col xs={2} sm={3} xl={4} />
          </Row>
        </Container>
        <Container className="sectionContact" fluid>
          <a className="contactLink" href="https://digital-bath.s3.ap-southeast-2.amazonaws.com/resume.pdf">résumé</a>
          <a className="contactLink" href="mailto:jin_hoe@outlook.com">contact</a>
        </Container>
      </Fragment>
    );
  }
}

export default Landing;
