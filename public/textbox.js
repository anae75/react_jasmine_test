import React from "react";

let TextBox = React.createClass({
  getInitialState: function () {
    return {name: this.props.name};
  },

  changeInput(e) {
    //console.log(e.target.value);
    this.setState({name: e.target.value});
  },

  render: function() {
    return (
       <div>
       <input value={this.state.name} onChange={this.changeInput.bind(this)} />
       <div>
         {this.state.name}
       </div>
      </div>
    );
  }
});

module.exports = TextBox;
