import React, { Fragment } from "react";
import constants from "../utils/constants";

interface IProps {}

interface IState {}

class BackToTop extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <a
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        className="backToTop"
      >
        top
      </a>
    );
  }
}
export default BackToTop;
