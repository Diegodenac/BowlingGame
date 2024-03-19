import Game from "./Game";

function rollMany(g, n, pins) {
  for (let i = 0; i < n; i++) {
    g.roll(pins);
  }
}
function rollSpare(g) {
  g.roll(5);
  g.roll(5); //spare
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

  it("Deberia obtener el Score total en caso de existir un Spare", () => {
    const g = new Game();
    rollSpare(g);
    g.roll(3);
    rollMany(g, 17, 0);
    expect(g.score()).toEqual(16);
  });

  it("Deberia obtener el Score total en caso de existir un Strike", () => {
    const g = new Game();
    g.roll(10) //strike
    g.roll(3);
    g.roll(4);
    rollMany(g, 16, 0); 
    expect(g.score()).toEqual(24);
  });

  it("Deberia obtener el Score Perfecto", () => {
    const g = new Game();
    rollMany(g, 12, 10); 
    expect(g.score()).toEqual(300);
  });

  
});