import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>25 + 5 Clock</h1>
          <div id="clock">
            <div id="top-controls">
              <div id="break">
                <span id="break-label">Break Length</span>
                <div className="break-display">
                  <i
                    id="break-decrement"
                    className="fa fa-arrow-down"
                    ariaHidden="true"
                  ></i>
                  <span id="break-length">5:00</span>
                  <i
                    id="break-increment"
                    className="fa fa-arrow-up"
                    ariaHidden="true"
                  ></i>
                </div>
              </div>
              <div id="session">
                <span id="session-label">Session Length</span>
                <div className="session-display">
                  <i
                    id="session-decrement"
                    className="fa fa-arrow-down"
                    ariaHidden="true"
                  ></i>
                  <span id="session-length">25:00</span>
                  <i
                    id="session-increment"
                    className="fa fa-arrow-up"
                    ariaHidden="true"
                  ></i>
                </div>
              </div>
            </div>
            <div id="display">
              <span id="timer-label">Session</span>
              <span id="time-left">25:00</span>
            </div>
            <div id="bottom-controls">
              <div id="start_stop">
                <i className="fa fa-play" ariaHidden="true"></i>
                <i className="fa fa-pause" ariaHidden="true"></i>
              </div>
              <div id="reset">
                <i className="fa fa-refresh" ariaHidden="true"></i>
              </div>
            </div>
            <div id="credit">
              <p>
                Designed by{" "}
                <a href="https://www.freecodecamp.org/no-stack-dub-sack">
                  Peter Weinberg
                </a>
              </p>
              <p>
                Coded by{" "}
                <a href="https://www.freecodecamp.org/mikeattah">Mike Attah</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
