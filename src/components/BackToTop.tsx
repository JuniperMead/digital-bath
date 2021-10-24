import React from "react";
import smoothscroll from 'smoothscroll-polyfill';

interface IProps {}

interface IState {}

class BackToTop extends React.Component<IProps, IState> {
  render() {
    smoothscroll.polyfill();
    return (
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        className="backToTop"
      >
        T O P
      </button>
    );
  }
}
export default BackToTop;
