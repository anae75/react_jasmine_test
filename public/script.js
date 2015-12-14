import React from "react";
import ReactDOM from "react-dom";
var Timer = require("./timer");
var TextBox = require("./textbox");
var AddTimer = require("./addtimer");

import './stylesheets/timer.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      timers: [5, 99, 42, 10],
      name:  'Vampire Princess Miyu'
      };
  }
  timerContent() {
    return this.state.timers.map((seconds, i) =>
      <Timer startingSeconds={seconds} key={i} />
    );
  }
  render() {
    return (
      <div>
        <div>
          {this.timerContent()}
        </div>
        <div>
          <TextBox name={this.state.name} />
        </div>
        <div>
          <AddTimer />
        </div>
     </div>

    );
  }
}

// To see this in the console, click on the React tab of the chrome developer tools
ReactDOM.render(<App />, document.getElementById('react'));
