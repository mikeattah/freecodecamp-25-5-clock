import React, { useState, useEffect } from "react";

const Clock = (props) => {
  const { handleDecrement, handleIncrement, handleStartStop, handleReset } =
    props;

  const [play, setPlay] = useState(`stop`);
  const [label, setLabel] = useState(`Session`);
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [minutesLeft, setMinutesLeft] = useState(25);
  const [secondsLeft, setSecondsLeft] = useState(0);

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
                    onClick={() => {
                      breakLength > 1
                        ? setBreakLength(breakLength - 1)
                        : setBreakLength(breakLength);
                    }}
                  ></i>
                  <span id="break-length">{breakLength}</span>
                  <i
                    id="break-increment"
                    className="fa fa-arrow-up"
                    aria-hidden="true"
                    onClick={() => {
                      breakLength < 60
                        ? setBreakLength(breakLength + 1)
                        : setBreakLength(breakLength);
                    }}
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
                    onClick={() => {
                      if (sessionLength > 1) {
                        setSessionLength(sessionLength - 1);
                        setMinutesLeft(sessionLength - 1);
                      } else {
                        setSessionLength(sessionLength);
                        setMinutesLeft(sessionLength);
                      }
                    }}
                  ></i>
                  <span id="session-length">{sessionLength}</span>
                  <i
                    id="session-increment"
                    className="fa fa-arrow-up"
                    aria-hidden="true"
                    onClick={() => {
                      if (sessionLength < 60) {
                        setSessionLength(sessionLength + 1);
                        setMinutesLeft(sessionLength + 1);
                      } else {
                        setSessionLength(sessionLength);
                        setMinutesLeft(sessionLength);
                      }
                    }}
                  ></i>
                </div>
              </div>
            </div>
            {/* Check above only */}
            <div id="display">
              <span id="timer-label">{label}</span>
              <span id="time-left">
                {minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft}:
                {secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}
              </span>
            </div>
            <div id="bottom-controls">
              <div id="start_stop" onClick={() => setPlay(`start`)}>
                <i className="fa fa-play" aria-hidden="true"></i>
                <i className="fa fa-pause" aria-hidden="true"></i>
              </div>
              <div id="reset">
                <i
                  className="fa fa-refresh"
                  aria-hidden="true"
                  onClick={handleReset}
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
};

export default Clock;
