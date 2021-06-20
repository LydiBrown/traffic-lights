import React, { Component } from "react";

class Redlight extends Component {
  render() {
    return (
      <div className="inner">
        {this.props.active ? (
          <div className="light stop on"></div>
        ) : (
          <div className="light stop"></div>
        )}
      </div>
    );
  }
}

export default Redlight;
