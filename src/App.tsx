import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

import "./styles/App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Landing from "./pages/Landing";
import Tools from "./pages/Tools";
import BackToTop from "./components/BackToTop";
import Time from "./components/Time";
import NotFound from "./pages/NotFound";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Router>
          <AnimatedCursor
            innerSize={"0.5vw"}
            outerSize={"1.5vw"}
            color="0, 0, 0"
            outerAlpha={0.2}
            outerScale={1.5}
            trailingSpeed={6}
          />
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
        </Router>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
