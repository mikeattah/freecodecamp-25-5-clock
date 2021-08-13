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
              <p>Break Length</p>
              <div>
                <i class="fa fa-arrow-down" aria-hidden="true"></i>
                <span>25</span>
                <i class="fa fa-arrow-up" aria-hidden="true"></i>
              </div>
            </div>
            <div id="session">
              <p>Session Length</p>
              <div>
                <i class="fa fa-arrow-down" aria-hidden="true"></i>
                <span>5</span>
                <i class="fa fa-arrow-up" aria-hidden="true"></i>
              </div>
            </div>
            <div id="display">
              <span>Session</span>
              <span>25:00</span>
            </div>
            <div id="bottom-controls">
              <div>
                <i class="fa fa-play" aria-hidden="true"></i>
                <i class="fa fa-pause" aria-hidden="true"></i>
              </div>
              <i class="fa fa-refresh" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
