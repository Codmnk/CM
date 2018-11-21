import React, { Component } from "react";

class Test extends Component {
  state = {};

  // componentWillMount() {
  //   console.log("component Will mount ...");
  // }

  componentDidMount() {
    console.log("component did mount ...");
  }

  // componentDidUpdate() {
  //   console.log("component did update ...");
  // }

  // componentWillUpdate() {
  //   console.log("component will update ...");
  // }

  // UNSEF_.... //use prefix as componentWill... is deprecated
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("this run when component receives props");
  // }

  // new lifecycle methods replacing componentWillReceiveProps
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return null;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {}

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
