import React, { Component } from "react";

class Amberlight extends Component {
  render() {
    return (
      <div className="inner">
        {this.props.active ? (
          <div className="light caution on"></div>
        ) : (
          <div className="light caution "></div>
        )}
      </div>
    );
  }
}

export default Amberlight;
