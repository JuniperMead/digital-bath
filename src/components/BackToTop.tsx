import React from "react";

interface IProps {}

interface IState {}

class BackToTop extends React.Component<IProps, IState> {
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
