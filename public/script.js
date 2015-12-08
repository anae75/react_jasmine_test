import React from "react";
import ReactDOM from "react-dom";
var Timer = require("./timer");

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
