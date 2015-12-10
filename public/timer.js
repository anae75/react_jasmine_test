import React from "react";

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
  componentWillUnmount: function() {
    clearInterval(this.intervalId);
  },
  isRunning: function() {
    return this.state.running;
  },
  handleClick(e) {
    //e.preventDefault();
    console.log("clicked", e.target);
    console.log(this.state);
    //this.setState( {remainingSeconds:  0} );
    if(!this.state.running) {
      if(this.props.removeTimer) {
        this.props.removeTimer();
      } else {
        this.setState({running:  !this.state.running});
      }
    } else {
      this.setState({running:  !this.state.running});
    }
  },
  render: function() {
    return (
      <div onClick={this.handleClick}>
        {this.state.remainingSeconds}  initialValue={this.props.startingSeconds}
      </div>
    );
  }
});

module.exports = Timer;
