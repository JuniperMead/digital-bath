import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

import "./styles/App.css";
import constants from "./utils/constants";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Landing from "./pages/Landing";
import Tools from "./pages/Tools";
import BackToTop from "./components/BackToTop";
import Time from "./components/Time";
import NotFound from "./pages/NotFound";
import LightToggle from "./components/LightToggle";

interface IState {
  isDesktop: boolean;
  isTablet: boolean;
}

class App extends React.Component<any, IState> {
  constructor(props) {
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
        <Router>
          {this.state.isDesktop && (
            <AnimatedCursor
              innerSize={"0.5vw"}
              outerSize={"1.5vw"}
              color="0, 0, 0"
              outerAlpha={0.2}
              outerScale={1.5}
              trailingSpeed={6}
            />
          )}
          <LightToggle />
          <BackToTop />
          <Time />
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Landing />
            </Route>
            <Route path="/Tools" exact>
              <Tools />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        <Footer />
        </Router>
      </Fragment>
    );
  }
}

export default App;
