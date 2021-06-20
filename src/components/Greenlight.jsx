import React, { Component } from "react";

class Greenlight extends Component {
  render() {
    return (
      <div className="inner">
        {this.props.active ? (
          <div className="light go on"></div>
        ) : (
          <div className="light go "></div>
        )}
      </div>
    );
  }
}

export default Greenlight;
