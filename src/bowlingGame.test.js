describe("BowlingGameTest", () => {
  it("Deberia obtener el Score total", () => {
    const g = new Game();
    for(let i=0; i<20; i++){
      g.roll(0);
    }
    expect(g.score()).toEqual(0);
  });
});

class Game {
  roll(pins){

  }
  score(){
    return 0;
  }

}