import Game from "./Game";

function rollMany(g, n, pins) {
  for (let i = 0; i < n; i++) {
    g.roll(pins);
  }
}

describe("BowlingGameTest para obtener Score", () => {

  it("Deberia obtener el Score total para 20 tiros de 0 puntos", () => {
    const g = new Game();
    rollMany(g, 20, 0);
    expect(g.score()).toEqual(0);
  });

  it("Deberia obtener el Score total para 20 tiros de 1 punto", () => {
    const g = new Game();
    rollMany(g, 20, 1);
    expect(g.score()).toEqual(20);
  });

  
});