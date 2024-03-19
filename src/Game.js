class Game {
  constructor() {
    this.rolls= []; 
    this.currentRoll=0;
  }

  roll(pins) {
    this.rolls.push(pins)
    this.currentRoll++;
  }

  isSpare(frameIndex){
    return this.rolls[frameIndex]+this.rolls[frameIndex+1] == 10;
  }

  score() {
    let score = 0;
    let frameIndex=0;
    for(let frame=0; frame<10; frame++){
      if(this.rolls[frameIndex] == 10) //strike
      {
        score+=10+this.rolls[frameIndex+1]+this.rolls[frameIndex+2];
        frameIndex++;
      }
      else if(this.isSpare(frameIndex)) //spare
      {
        score += 10+this.rolls[frameIndex+2];
        frameIndex+=2;
      }
      else{
        score +=this.rolls[frameIndex]+this.rolls[frameIndex+1];
        frameIndex+=2;
      }
    }
    return score; 
  }
}

module.exports = Game;