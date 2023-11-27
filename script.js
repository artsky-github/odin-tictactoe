const Gameboard = (function () {
  // Neat one-liner that creates a 3x3 array filled with null.
  const gameboard = [...Array(3)].map(() => Array(3).fill(null));
  const resetBoard = () => {
    for (row in gameboard) {
      gameboard[row].fill(null);
    }
  };
  const updateBoard = (x, y, playerValue) => {
    if (x > gameboard.length - 1 || x < 0 || y > gameboard.length - 1 || y < 0)
      return false;
    gameboard[x][y] = playerValue;
    return true;
  };
  const getBoard = () => {
    return gameboard;
  };
  const checkForWinner = (playerValue) => {
    for (let row = 0; row <= 2; row++) {
      Gameboard.getBoard()[row].every((columnValue) => {
        columnValue === playerValue;
      });
    }
    for (let col = 0; col <= 2; col++) {
      let gameboardColumn = Gameboard.getBoard().map((nestedArray) => {
        return nestedArray[col];
      });
      gameboardColumn.every((rowValue) => {
        rowValue === playerValue;
      });
    }
  };
  return { resetBoard, getBoard, updateBoard, checkForWinner };
})();

const Player = function (name, value) {
  this.score = 0;
  this.name = name;
  this.value = value;
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
Player.prototype.getValue = function () {
  return this.value;
};

function TicTacToeGame() {
  let currentPlayer;
  let validGrid;
  let gameFinished = false;
  let turn = 0;

  const players = requestPlayerNames();

  while (!gameFinished) {
    currentPlayer = turn % 2;
    validGrid = false;

    while (!validGrid) {
      let gridRow = prompt(`What row ${players[currentPlayer].getName()}?`);
      let gridCol = prompt(`What column ${players[currentPlayer].getName()}?`);
      validGrid = Gameboard.updateBoard(
        gridRow,
        gridCol,
        players[currentPlayer].getValue()
      );
    }

    console.log(Gameboard.getBoard());
    turn++;
  }
}

function requestPlayerNames() {
  let name;
  name = prompt("What is your name?", "Player 1");
  const playerOne = new Player(name, 1);
  name = prompt("What is your name?", "Player 2");
  const playerTwo = new Player(name, 0);
  return [playerOne, playerTwo];
}

TicTacToeGame();
