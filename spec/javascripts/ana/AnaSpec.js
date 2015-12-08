import React from "react";
import ReactDOM from "react-dom";

var Player = require('../../../public/javascripts/jasmine_examples/player');
var Song = require('../../../public/javascripts/jasmine_examples/song');

//var TestUtils = React.addons.TestUtils;
var ReactTestUtils = require('react-addons-test-utils');

describe("AnaTesting", function() {

  var Timer = require("../../../public/timer");

  it("copied from examples should always work", function() {
    var player = new Player();
    var song = new Song();
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);
  });

  it("should be able to create a react element", function() {
    var component = ReactTestUtils.renderIntoDocument(<Timer startingSeconds={100} />);
    expect(component.isRunning()).toEqual(true);
  });


  it("should be able to stop and start the timer", function() {
    var elem = null;
    var component = ReactTestUtils.renderIntoDocument(<Timer ref={function(e) {elem = e;}} startingSeconds={100} />);

    // timer is running by default
    expect(component.isRunning()).toEqual(true);

    // simulate a click which should stop the timer
    var renderedDOM = () => ReactDOM.findDOMNode(component);
    var domElem = renderedDOM();
    expect(domElem.tagName).toEqual("DIV");

    ReactTestUtils.Simulate.click(domElem);
    expect(component.isRunning()).toEqual(false);

    // now call handleClick directly
    component.handleClick(elem);
    expect(component.isRunning()).toEqual(true);

  });

});
