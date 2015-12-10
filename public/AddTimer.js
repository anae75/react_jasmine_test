import React from "react";

var Timer = require("./timer");

let AddTimer = React.createClass({

  getInitialState: function () {
    return {startSeconds: null, timers: [] };
  },

  componentDidMount: function() {
    this.numTimers = 0;
  },

  changeInput(e) {
    this.setState({startSeconds: parseInt(e.target.value) || null});
  },

  removeTimer(index) {
    console.log("Removing timer, but which one?");
    console.log(index);
    let currentTimers = this.state.timers;
    currentTimers.splice(index, 1);
    console.log(currentTimers);
    this.setState({timers: currentTimers});
  },

  timerListContent() {
    // key disambiguates between new timers and already running timers
    return this.state.timers.map((seconds, i) =>
      <Timer startingSeconds={seconds} key={i} removeTimer={this.removeTimer.bind(this,i)} timerNumber={i} />
    );
  },

  handleNewTimerClick: function() {
    if(this.state.startSeconds) {
      console.log('Creating a new timer: ' + this.state.startSeconds);
      this.setState({timers: this.state.timers.concat(this.state.startSeconds), startSeconds: null});
      this.numTimers = this.numTimers + 1;
    }
  },

  render: function() {
    return (
       <div className='timer-panel'>
         <h2> A timer panel </h2>

         <div className='input'>
         <input placeholder="seconds" value={this.state.startSeconds} onChange={this.changeInput} />
         <button onClick={this.handleNewTimerClick}>Add Timer ({this.state.startSeconds})</button>
        </div>

        <div className='timer-list'>

          {this.timerListContent()}

        </div>

      </div>

    );
  }
});

module.exports = AddTimer;
