import React from "react";

var Timer = require("./timer");

let AddTimer = React.createClass({
  getInitialState: function () {
    return {startSeconds: null, timers: [] };
  },

  changeInput(e) {
    this.setState({startSeconds: parseInt(e.target.value) || null});
  },

  timerListContent() {
    // key disambiguates between new timers and already running timers
    return this.state.timers.map((seconds, i) =>
      <Timer startingSeconds={seconds} key={i} />
    );
  },

  handleNewTimerClick: function() {
    if(this.state.startSeconds) {
      console.log('Creating a new timer: ' + this.state.startSeconds);
      this.setState({timers: this.state.timers.concat(this.state.startSeconds)});
    }
  },

  render: function() {
    return (
       <div className='timer-panel'>
         <h2> A timer panel </h2>

         <div className='input'>
         <input placeholder="seconds" onChange={this.changeInput} />
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
