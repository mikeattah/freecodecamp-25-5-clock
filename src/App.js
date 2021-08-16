import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: `Session`, // Session or Break
      play: `stop`,
      breakLength: 5,
      sessionLength: 25,
      minutesLeft: 25,
      secondsLeft: 0,
    };
    this.handleReset = this.handleReset.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleStartStop = this.handleStartStop.bind(this);
  }

  handleReset() {
    this.setState({
      label: `Session`,
      play: `stop`,
      breakLength: 5,
      sessionLength: 25,
      minutesLeft: 25,
      secondsLeft: 0,
    });
  }

  handleIncrement(e) {
    if (e.target.id === "break-increment") {
      this.setState({
        breakLength:
          this.state.breakLength < 60 ? this.state.breakLength + 1 : 60,
      });
    }

    if (e.target.id === "session-increment") {
      this.setState({
        sessionLength:
          this.state.sessionLength < 60 ? this.state.sessionLength + 1 : 60,
        minutesLeft:
          this.state.sessionLength < 60 ? this.state.sessionLength + 1 : 60,
      });
    }
  }

  handleDecrement(e) {
    if (e.target.id === "break-decrement") {
      this.setState({
        breakLength:
          this.state.breakLength > 1 ? this.state.breakLength - 1 : 1,
      });
    }

    if (e.target.id === "session-decrement") {
      this.setState({
        sessionLength:
          this.state.sessionLength > 1 ? this.state.sessionLength - 1 : 1,
        minutesLeft:
          this.state.sessionLength > 1 ? this.state.sessionLength - 1 : 1,
      });
    }
  }

  handleStartStop(e) {
    if (this.state.play === `stop`) {
      this.setState({
        play: `play`,
      });
    } else {
      this.setState({
        play: `stop`,
      });
    }
    console.log(this.state.play);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div id="box">
            <h1>25 + 5 Clock</h1>
            <div id="clock">
              <div id="top-controls">
                <div id="break">
                  <span id="break-label">Break Length</span>
                  <div className="break-display">
                    <i
                      id="break-decrement"
                      className="fa fa-arrow-down"
                      aria-hidden="true"
                      onClick={this.handleDecrement}
                    ></i>
                    <span id="break-length">{this.state.breakLength}</span>
                    <i
                      id="break-increment"
                      className="fa fa-arrow-up"
                      aria-hidden="true"
                      onClick={this.handleIncrement}
                    ></i>
                  </div>
                </div>
                <div id="session">
                  <span id="session-label">Session Length</span>
                  <div className="session-display">
                    <i
                      id="session-decrement"
                      className="fa fa-arrow-down"
                      aria-hidden="true"
                      onClick={this.handleDecrement}
                    ></i>
                    <span id="session-length">{this.state.sessionLength}</span>
                    <i
                      id="session-increment"
                      className="fa fa-arrow-up"
                      aria-hidden="true"
                      onClick={this.handleIncrement}
                    ></i>
                  </div>
                </div>
              </div>
              <div id="display">
                <span id="timer-label">{this.state.label}</span>
                <span id="time-left">
                  {this.state.minutesLeft < 10
                    ? `0${this.state.minutesLeft}`
                    : this.state.minutesLeft}
                  :
                  {this.state.secondsLeft < 10
                    ? `0${this.state.secondsLeft}`
                    : this.state.secondsLeft}
                </span>
              </div>
              <div id="bottom-controls">
                <div id="start_stop" onClick={this.handleStartStop}>
                  <i className="fa fa-play" aria-hidden="true"></i>
                  <i className="fa fa-pause" aria-hidden="true"></i>
                </div>
                <div id="reset">
                  <i
                    className="fa fa-refresh"
                    aria-hidden="true"
                    onClick={this.handleReset}
                  ></i>
                </div>
              </div>
              <audio
                id="beep"
                src="/mixkit-guitar-notification-alert-2320.mp3"
              ></audio>
              <div id="credit">
                <p>
                  Designed by{" "}
                  <a
                    href="https://www.freecodecamp.org/no-stack-dub-sack"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Peter Weinberg
                  </a>
                </p>
                <p>
                  Coded by{" "}
                  <a
                    href="https://www.freecodecamp.org/mikeattah"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Mike Attah
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
