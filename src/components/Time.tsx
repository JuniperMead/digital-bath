import React from "react";
import Moment from "react-moment";
import "moment-timezone";

interface IProps {}

interface IState {
    time: Date;
    update?: Date;
}

class BackToTop extends React.Component<IProps, IState> {
  update: NodeJS.Timeout;

  constructor(props: IProps) {
    super(props);
    this.update = setInterval(() => {}, 0);

    this.state = {
        time: new Date()
    }
  }

  componentDidMount() {
       this.update = setInterval(() => {
          this.setState({ time: new Date() });
      }, 1000);
  }

  componentWillUnmount() {
      clearInterval(this.update);
  }

  render() {
    return (
      <Moment format="LTS" className="timeDisplay" tz="Australia/Melbourne">
          {this.state.time}
      </Moment>
    );
  }
}
export default BackToTop;
