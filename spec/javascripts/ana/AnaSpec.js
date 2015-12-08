import React from "react";

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

});
