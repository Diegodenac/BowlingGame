import Game from "./Game";

describe("BowlingGameTest para obtener Score", () => {
  it("Deberia obtener el Score total para 20 tiros de 0 puntos", () => {
    const g = new Game();
    for(let i=0; i<20; i++){
      g.roll(0);
    }
    expect(g.score()).toEqual(0);
  });

  it("Deberia obtener el Score total para 20 tiros de 1 punto", () => {
    const g = new Game();
    for(let i=0; i<20; i++){
      g.roll(1);
    }
    expect(g.score()).toEqual(20);
  });
});