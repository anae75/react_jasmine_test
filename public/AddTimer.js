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
    // currently running timers should not have their key changed while they
    // live in this component
    return this.state.timers.map((data, i) =>
      <Timer startingSeconds={data.seconds} key={data.key} removeTimer={this.removeTimer.bind(this,i)} />
    );
  },

  handleNewTimerClick: function() {
    if(this.state.startSeconds) {
      console.log('Creating a new timer: ' + this.state.startSeconds);
      this.setState({
        timers: this.state.timers.concat({seconds: this.state.startSeconds, key: this.numTimers}), 
        startSeconds: null });
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
