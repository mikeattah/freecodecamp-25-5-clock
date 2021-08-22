import { Clock } from "./components/clock";

const App = () => {
  const handleReset = () => {
    this.setState({
      label: `Session`,
      play: `stop`,
      breakLength: 5,
      sessionLength: 25,
      minutesLeft: 25,
      secondsLeft: 0,
    });
  }

  const handleIncrement = (e) => {
    if (e.target.id === "break-increment") {
      this.setState({
        breakLength:
          this.state.breakLength < 60 ? this.state.breakLength + 1 : 60,
        secondsLeft: 0,
      });
    }

    if (e.target.id === "session-increment") {
      this.setState({
        sessionLength:
          this.state.sessionLength < 60 ? this.state.sessionLength + 1 : 60,
        minutesLeft:
          this.state.sessionLength < 60 ? this.state.sessionLength + 1 : 60,
        secondsLeft: 0,
      });
    }
  }

  const handleDecrement = (e) => {
    if (e.target.id === "break-decrement") {
      this.setState({
        breakLength:
          this.state.breakLength > 1 ? this.state.breakLength - 1 : 1,
        secondsLeft: 0,
      });
    }

    if (e.target.id === "session-decrement") {
      this.setState({
        sessionLength:
          this.state.sessionLength > 1 ? this.state.sessionLength - 1 : 1,
        minutesLeft:
          this.state.sessionLength > 1 ? this.state.sessionLength - 1 : 1,
        secondsLeft: 0,
      });
    }
  }

  const handleStartStop = () => {
    var startClock;

    this.setState(play: (prevState) => { prevState === `stop` ? `start` : `stop` });

    console.log(this.state.play);

    if (this.state.play === `start`) {
      setInterval(
        (startClock = () => {
          if (this.state.secondsLeft === 0 && this.state.minutesLeft >= 1) {
            this.setState({
              minutesLeft: this.state.minutesLeft - 1,
              secondsLeft: 60,
            });
          }

          if (this.state.secondsLeft > 0) {
            this.setState({
              secondsLeft: this.state.secondsLeft - 1,
            });
          }

          if (
            this.state.minutesLeft === 0 &&
            this.state.secondsLeft === 0 &&
            this.state.label === `Session`
          ) {
            this.setState({
              label: `Break`,
              minutesLeft: this.state.breakLength,
              secondsLeft: 0,
            });
          }

          if (
            this.state.minutesLeft === 0 &&
            this.state.secondsLeft === 0 &&
            this.state.label === `Break`
          ) {
            this.setState({
              label: `Session`,
              minutesLeft: this.state.sessionLength,
              secondsLeft: 0,
            });
          }
        }),
        1000
      );
    }

    if (this.state.play === `stop`) {
      clearInterval(startClock);
      this.setState({
        minutesLeft: this.state.minutesLeft,
        secondsLeft: this.state.secondsLeft,
      });
    }
  }

  return (<Clock props={props}/>);
}

export default App;