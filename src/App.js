import "./App.css";
import React, { Component } from "react";
import Trafficlights from "./components/Trafficlights";

class App extends Component {
  state = { stop: false, caution: false, go: false };

  clearLights = () => {
    clearInterval(this.timer);
    this.setState({ stop: false, caution: false, go: false });
  };

  //sequence for auto lights
  autoLights = () => {
    clearInterval(this.timer);
    const sequence = [
      { stop: true, caution: false, go: false },
      { stop: true, caution: true, go: false },
      { stop: false, caution: false, go: true },
      { stop: false, caution: true, go: false },
    ];

    //auto lights interval
    let i = 0;
    let timer = null;

    this.timer = setInterval(() => {
      this.setState({
        stop: sequence[i].stop,
        caution: sequence[i].caution,
        go: sequence[i].go,
      });
      console.log(i);
      if (i >= sequence.length - 1) {
        i = 0;
      } else i++;
    }, 2000);
  };

  //buttons
  render() {
    return (
      <>
        <div className="outer">
          <Trafficlights lightConfig={this.state} />
        </div>
        <footer>
          <button
            className="stop"
            onClick={() => {
              clearInterval(this.timer);
              this.setState({ stop: true, caution: false, go: false });
            }}
          >
            Stop
          </button>
          <button
            className="caution"
            onClick={() => {
              clearInterval(this.timer);
              this.setState({ stop: false, caution: true, go: false });
            }}
          >
            Caution
          </button>
          <button
            className="go"
            onClick={() => {
              clearInterval(this.timer);
              this.setState({ stop: false, caution: false, go: true });
            }}
          >
            Go
          </button>
          <button class="auto go" onClick={this.autoLights}>
            Auto Go
          </button>
          <button class="reset" onClick={this.clearLights}>
            Reset
          </button>
        </footer>
      </>
    );
  }
}

export default App;
