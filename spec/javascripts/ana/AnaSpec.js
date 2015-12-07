describe("AnaTesting", function() {

  it("copied from examples should always work", function() {
    player = new Player();
    song = new Song();
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);
  });

  it("should be able to create a react element", function() {
  });

});
