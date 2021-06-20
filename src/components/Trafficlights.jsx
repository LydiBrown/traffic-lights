import React, { Component } from "react";
import Amberlight from "./Amberlight";
import Greenlight from "./Greenlight";
import Redlight from "./Redlight";

class Trafficlights extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Redlight active={this.props.lightConfig.stop} />
        <Amberlight active={this.props.lightConfig.caution} />
        <Greenlight active={this.props.lightConfig.go} />
      </>
    );
  }
}

export default Trafficlights;
