import React from "react";
import ReactDOM from "react-dom";

let Timer = React.createClass({
  getInitialState: function() {
    return { remainingSeconds: this.props.startingSeconds };
  },
  startTimer: function() {
    let delta = 1;
    let intervalId = setInterval(function() {
      if(!this.state.running) {
        return;
      }
      if (this.state.remainingSeconds === 0 ||
          this.state.remainingSeconds === this.props.startingSeconds ) {
        delta = -1 * delta;
      }
      this.setState({ remainingSeconds: this.state.remainingSeconds + delta})
    }.bind(this), 1000);
    this.intervalId = intervalId;
    console.log("started timer");
    this.setState({running: true});
  },
  componentDidMount: function() {
    this.startTimer();
  },
  handleClick(e) {
    e.preventDefault();
    console.log("clicked", e.target);
    console.log(this.state);
    this.setState({running:  !this.state.running});
    //this.setState( {remainingSeconds:  0} );
  },
  render: function() {
    return (
      <div onClick={this.handleClick}>
        {this.state.remainingSeconds}
      </div>
    );
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { timers: [5, 99, 42, 10] };
  }
  content() {
    return this.state.timers.map((seconds, i) =>
      <Timer startingSeconds={seconds} key={i} />
    );
  }
  render() {
    return (
      <div>
        {this.content()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react'));
