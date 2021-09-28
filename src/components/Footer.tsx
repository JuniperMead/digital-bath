import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import constants from "../utils/constants";

interface IProps {}

interface IState {
  isDesktop: boolean;
  isTablet: boolean;
}

class Footer extends React.Component<IProps, IState> {
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
        <Row className="footer" noGutters>
          <Col>
            <hr
              style={{
                marginBottom: "2vw",
                background: "#000000",
                height: "1px",
                borderWidth: 0,
              }}
            />
            {this.state.isDesktop || this.state.isTablet ? (
              <Fragment>
                <Row className="subFooter" noGutters>
                  <Col xs={5} md={5} lg={5} className="digitalBath">
                    <a href="https://music.apple.com/album/white-pony/1099848709">
                      digital bath
                    </a>
                  </Col>
                  <Col xs={2} md={2} lg={2} className="abn">
                    2 0 2 1
                  </Col>
                  <Col xs={5} md={5} lg={5} className="year">
                    ABN 89 117 877 898
                  </Col>
                </Row>
              </Fragment>
            ) : (
              <Fragment>
                <Row className="subFooter" noGutters>
                  <Col className="digitalBath">
                    <a href="https://music.apple.com/album/white-pony/1099848709">
                      digital bath
                    </a>
                  </Col>
                  <Col className="abn">ABN 89 117 877 898</Col>
                </Row>
                <Row noGutters>
                  <Col className="year">2 0 2 1</Col>
                </Row>
              </Fragment>
            )}
          </Col>
        </Row>
      </Fragment>
    );
  }
}
export default Footer;
