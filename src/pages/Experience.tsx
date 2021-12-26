import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/Experience.css";
import constants from "../utils/constants";

interface IProps {}

interface IState {
  isDesktop: boolean;
  isTablet: boolean;
  name: string;
}

class Projects extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isDesktop: false,
      isTablet: false,
      name: "Jin Hoe Lim",
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
      <div
        style={{
          minHeight: "100vh",
          width: "100vw",
        }}
      >
        <Container className="sectionExperienceProfile" fluid>
          <Row>
            <Col xs={1} />
            <Col xs={10}>
              <div className="title">Experience</div>
            </Col>
            <Col xs={1} />
          </Row>
        </Container>
        <Container className="sectionExperience" fluid>
          <Row>
            <Col xs={1} />
            <Col xs={5} className="skills">
              <Row>
                <Col className="experienceLocation">
                  &gt; E M P L O Y M E N T
                  <br />[ 2019 - ]
                </Col>
              </Row>
              <Row>
                <Col className="experienceSubtitle">
                  Wallace Corporation <br />
                  <a href="https://www.wallacedesign.com.au">
                    [ w e b s i t e ]
                  </a>
                </Col>
              </Row>
              <Row>
                <Col className="skills">
                  Full Stack Software Engineer &amp; Software Team Leader
                  <br />
                  &gt; Dec 2020 - Present
                </Col>
              </Row>
              <Row>
                <Col className="experienceText">
                  <br />
                  I am currently employed as a Full Stack Software Engineer and
                  Software Team Leader at Wallace Corporation. The position of
                  Software Team Leader was assigned to me after I naturally
                  assumed the role as the team grew.
                  <br />
                  <br />
                  I coordinate numerous software projects and teams concurrently
                  with members in 4 different timezones, from Moscow to
                  Auckland. As a key member of the company I advise on strategy
                  and product design. Duties usually performed by Product
                  Owners, SCRUM Masters, Project Managers, Recruiters and IT
                  Engineers are covered by myself, whilst also working full-time
                  as a software engineer across multiple projects.
                  <br />
                  <br />
                  Main Tech Stack:
                  <br />
                  &gt; TypeScript
                  <br />
                  &gt; NextJS
                  <br />
                  &gt; React &amp; React Native
                  <br />
                  &gt; NodeJS
                  <br />
                  &gt; MongoDB Atlas &amp; Realm
                  <br />
                  &gt; AWS
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col className="experienceSubtitle">
                  Swinburne University <br />
                  <a href="https://www.swinburne.edu.au/swinburne-professional/">
                    [ w e b s i t e ]
                  </a>
                </Col>
              </Row>
              <Row>
                <Col className="skills">
                  Technical Project Assistant
                  <br />
                  &gt; Mar 2020 - Dec 2020
                </Col>
              </Row>
              <Row>
                <Col className="experienceText">
                  <br />
                  I was employed part-time as a Technical Project Assistant,
                  whilst I completed by final year of my Bachelor degree, to
                  continue my duties after my internship concluded with
                  Swinburne Major Projects (now Swinburne Professional).
                  <br />
                  <br />
                  I performed duties indifferent from a Full Stack Software
                  Engineer. My title was given to justify a lower salary, as
                  university policy required a minimum remuneration for Software
                  Engineers, which Major Projects was not budgeted for. I
                  provided tier 3 support for projects delivered during my
                  internship as well as scoped new ones for tenders before being
                  assigned to a team to develop e-learning modules.
                  <br />
                  <br />
                  Main Tech Stack:
                  <br />
                  &gt; JavaScript
                  <br />
                  &gt; React &amp; React Native
                  <br />
                  &gt; NodeJS
                  <br />
                  &gt; AWS EC2 &amp; RDS
                  <br />
                  &gt; Azure SSO
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col className="experienceSubtitle">
                  Swinburne University <br />
                  <a href="https://www.swinburne.edu.au/swinburne-professional/">
                    [ w e b s i t e ]
                  </a>
                </Col>
              </Row>
              <Row>
                <Col className="skills">
                  Gamification Technology Officer
                  <br />
                  &gt; Mar 2019 - Mar 2020
                </Col>
              </Row>
              <Row>
                <Col className="experienceText">
                  <br />
                  I was hired as a Gamification Technology Officer to scope new
                  projects as well as develop software for a specific tender won
                  by Swinburne Major Projects (now Swinburne Professional).
                  <br />
                  <br />
                  My role quickly evolved into those of a Full Stack Software
                  Engineer. I scoped numerous software projects which resulted
                  in Major Projects winning three tenders, and was involved in
                  interviewing and hiring a mid-level software engineer to lead
                  the development efforts for a V/Line rail worker training
                  platform. The two of us developed 2 websites, native mobile
                  applications and a monolithic back-end to successfully deliver
                  the project ahead of schedule.
                  <br />
                  <br />
                  For a portion of my internship, I scoped and oversaw the
                  development of several Aviation VR training experiences for
                  Thales.
                  <br />
                  <br />
                  Main Tech Stack:
                  <br />
                  &gt; JavaScript
                  <br />
                  &gt; React &amp; React Native
                  <br />
                  &gt; NodeJS
                  <br />
                  &gt; AWS EC2 &amp; RDS
                  <br />
                  &gt; Azure SSO
                </Col>
              </Row>
            </Col>
            <Col xs={5} className="skills">
              <Row>
                <Col className="experienceLocation">&gt; C O N T R A C T</Col>
              </Row>
              <Row>
                <Col className="experienceSubtitle">
                  PathDX <br />
                  <a href="https://www.pathdx.com.au">[ w e b s i t e ]</a>
                </Col>
              </Row>
              <Row>
                <Col className="skills">
                  Company Website
                  <br />
                  &gt; Aug 2021 - Nov 2021
                  <br />
                  <br />
                </Col>
              </Row>
              <Row>
                <Col className="experienceText">
                  PathDX, subsidiary of Emergence Technology, is the sole
                  supplier of COVID-19 Rapid Antigen Tests for the Australian
                  Government.
                  <br />
                  <br />I was contracted to develop a new company website with
                  various features to better suit the growing customer base.
                  <br />
                  <br />
                  Key Features:
                  <br />
                  &gt; Training Booking System
                  <br />
                  &gt; E-Commerce
                  <br />
                  &gt; Official RAT usage instructions
                  <br />
                  <br />
                  Tech Stack &amp; Integrations:
                  <br />
                  &gt; TypeScript
                  <br />
                  &gt; React
                  <br />
                  &gt; NodeJS
                  <br />
                  &gt; MongoDB Atlas
                  <br />
                  &gt; AWS S3
                  <br />
                  &gt; AWS Amplify
                  <br />
                  &gt; Google reCaptcha
                  <br />
                  &gt; Calendly
                  <br />
                  &gt; Shopify
                  <br />
                  &gt; Stripe
                  <br />
                  <br />
                  Outcomes:
                  <br />
                  &gt; The website currently serves over 100,000 visitors daily
                  with 0% error rate
                  <br />
                  &gt; The booking &amp; enquiry systems directly resulted in
                  exponential growth in sales for PathDX
                  <br />
                  &gt; As of December 2021, PathDX generates over AUD 5,000,000
                  revenue daily
                </Col>
              </Row>
            </Col>
            <Col xs={1} />
          </Row>
        </Container>
        <Container className="sectionContact" fluid>
          <a
            className="contactLink"
            href="https://digital-bath.s3.ap-southeast-2.amazonaws.com/resume.pdf"
          >
            R É S U M É
          </a>
          <a className="contactLink" href="mailto:contact@digital-bath.net">
            C O N T A C T
          </a>
        </Container>
      </div>
    );
  }
}

export default Projects;
