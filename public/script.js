import React from "react";
import ReactDOM from "react-dom";
var Timer = require("./timer");

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      timers: [5, 99, 42, 10],
      name:  'Dragons!'
      };
  }
  timerContent() {
    return this.state.timers.map((seconds, i) =>
      <Timer startingSeconds={seconds} key={i} />
    );
  }
  changeInput(e) {
    //console.log(e.target.value);
    this.setState({name: e.target.value});
  }
  render() {
    return (
      <div>
        <div>
          {this.timerContent()}
        </div>
        <div>
         <input value={this.state.name} onChange={this.changeInput.bind(this)} />
         <div>
           {this.state.name}
         </div>
        </div>
      </div>

    );
  }
}

// To see this in the console, click on the React tab of the chrome developer tools
ReactDOM.render(<App />, document.getElementById('react'));
