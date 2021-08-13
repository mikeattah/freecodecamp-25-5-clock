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
          <div id="top-controls">
            <div id="break">
              <p id="break-label">Break Length</p>
              <div>
                <i
                  id="break-decrement"
                  class="fa fa-arrow-down"
                  aria-hidden="true"
                ></i>
                <span id="break-length">5</span>
                <i
                  id="break-increment"
                  class="fa fa-arrow-up"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
            <div id="session">
              <p id="session-label">Session Length</p>
              <div>
                <i
                  id="session-decrement"
                  class="fa fa-arrow-down"
                  aria-hidden="true"
                ></i>
                <span id="session-length">25</span>
                <i
                  id="session-increment"
                  class="fa fa-arrow-up"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
            <div id="display">
              <span id="timer-label">Session</span>
              <span id="time-left">25:00</span>
            </div>
            <div id="bottom-controls">
              <div id="start_stop">
                <i class="fa fa-play" aria-hidden="true"></i>
                <i class="fa fa-pause" aria-hidden="true"></i>
              </div>
              <i id="reset" class="fa fa-refresh" aria-hidden="true"></i>
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
