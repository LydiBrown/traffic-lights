import React, { Component } from "react";

class Neutral extends Component {
  render() {
    return (
      <div className="inner">
        <div className="light stop"></div>
        <div className="light caution"></div>
        <div className="light go"></div>
      </div>
    );
  }
}

export default Neutral;
