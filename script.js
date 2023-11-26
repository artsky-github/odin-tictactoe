const Gameboard = (function () {
  // Neat one-liner that creates a 3x3 array filled with null.
  const gameboard = [...Array(3)].map(() => Array(3).fill(null));
  const resetBoard = () => {
    return (gameboard = [...Array(3)].map(() => Array(3).fill(null)));
  };
  return { gameboard };
})();

const Player = function (name) {
  this.score = 0;
  this.name = name;
};

Player.prototype.getScore = function () {
  return this.score;
};
Player.prototype.addScore = function () {
  return this.score++;
};
Player.prototype.resetScore = function () {
  return (this.score = 0);
};
Player.prototype.setName = function (name) {
  return (this.name = name);
};
Player.prototype.getName = function () {
  return this.name;
};

function TicTacToeGame() {
  let gameFinished = false;
  let name = prompt("What is your name?", "Player 1");
  const playerOne = new Player(name);
  name = prompt("What is your name?", "Player 2");
  const playerTwo = new Player(name);

  while (gameFinished === false) {
    let gridRow = prompt("What row");
    let gridCol = prompt("What column");
  }

  console.log(playerOne);
  console.log(playerTwo);
}

TicTacToeGame();
