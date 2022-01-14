import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [play, setPlay] = useState(`stop`);
  const [label, setLabel] = useState(`Session`);
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [minutesLeft, setMinutesLeft] = useState(25);
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    if (play === `start`) {
      const clock = setInterval(() => {
        if (minutesLeft > 0 && secondsLeft === 0) {
          setMinutesLeft(minutesLeft - 1);
          setSecondsLeft(59);
        }

        if (secondsLeft > 0) {
          setSecondsLeft(secondsLeft - 1);
        }

        if (minutesLeft === 0 && secondsLeft === 0 && label === `Session`) {
          setLabel(`Break`);
          setMinutesLeft(breakLength);
          setSecondsLeft(0);
          let playElement = document.querySelector(`#beep`);
          playElement.play();
        } else if (
          minutesLeft === 0 &&
          secondsLeft === 0 &&
          label === `Break`
        ) {
          setLabel(`Session`);
          setMinutesLeft(sessionLength);
          setSecondsLeft(0);
          let playElement = document.querySelector(`#beep`);
          playElement.play();
        }
      }, 1000);
      return () => clearInterval(clock);
    }
  }, [play, minutesLeft, secondsLeft, label, breakLength, sessionLength]);

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
                  <button
                    id="break-decrement"
                    className="fa fa-arrow-down"
                    aria-hidden="true"
                    onClick={() => {
                      breakLength > 1
                        ? setBreakLength(breakLength - 1)
                        : setBreakLength(breakLength);
                    }}
                  ></button>
                  <span id="break-length">{breakLength}</span>
                  <button
                    id="break-increment"
                    className="fa fa-arrow-up"
                    aria-hidden="true"
                    onClick={() => {
                      breakLength < 60
                        ? setBreakLength(breakLength + 1)
                        : setBreakLength(breakLength);
                    }}
                  ></button>
                </div>
              </div>
              <div id="session">
                <span id="session-label">Session Length</span>
                <div className="session-display">
                  <button
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
                  ></button>
                  <span id="session-length">{sessionLength}</span>
                  <button
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
                  ></button>
                </div>
              </div>
            </div>
            <div id="display">
              <span id="timer-label">{label}</span>
              <span id="time-left">
                {minutesLeft < 10 ? `0` + minutesLeft : minutesLeft}:
                {secondsLeft < 10 ? `0` + secondsLeft : secondsLeft}
              </span>
            </div>
            <div id="bottom-controls">
              <button
                id="start_stop"
                onClick={() =>
                  play === `stop` ? setPlay(`start`) : setPlay(`stop`)
                }
              >
                <i className="fa fa-play" aria-hidden="true"></i>
                <i className="fa fa-pause" aria-hidden="true"></i>
              </button>
              <button id="reset">
                <i
                  className="fa fa-refresh"
                  aria-hidden="true"
                  onClick={() => {
                    setPlay(`stop`);
                    setLabel(`Session`);
                    setBreakLength(5);
                    setSessionLength(25);
                    setMinutesLeft(25);
                    setSecondsLeft(0);
                  }}
                ></i>
              </button>
            </div>
            <audio
              id="beep"
              src="/mixkit-guitar-notification-alert-2320.mp3"
              type="audio/mpeg"
              autoPlay
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

export default App;
