import React, { Fragment } from "react";
import "../styles/LightToggle.css";

interface IProps {}

interface IState {
  dark: boolean;
}

class LightToggle extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      dark: false,
    };
  }

  toggleLights = (isDark: boolean) => {
    this.setState({
      dark: !isDark,
    });
  };

  componentDidMount() {
    const currentTime = new Date().getHours();

    this.setState({
      dark: currentTime < 6 || currentTime > 18
    });
  }
  

  render() {
    return (
      <Fragment>
        <div
          className="overlay"
          style={{
            backgroundColor: this.state.dark ? "#FFFFFF" : "transparent",
          }}
        />
        <button
          className="lightsButton"
          onClick={() => this.toggleLights(this.state.dark)}
        >
          LIGHTS
        </button>
      </Fragment>
    );
  }
}
export default LightToggle;
