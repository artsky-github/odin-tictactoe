const Gameboard = (function () {
  // Neat one-liner that creates a 3x3 array filled with null.
  const gameboard = [...Array(3)].map(() => Array(3).fill(null));
  const resetBoard = () => {
    for (row in gameboard) {
      gameboard[row].fill(null);
    }
  };
  const updateBoard = (x, y, playerValue) => {
    // Makes sure that player can't input below 0 or higher than 2 for index of 2D array
    if (x > gameboard.length - 1 || x < 0 || y > gameboard.length - 1 || y < 0)
      return false;
    // Make sure that player is not overwriting another players value. Can only overwrite null.
    // Code here..................

    gameboard[x][y] = playerValue;
    return true;
  };
  const getBoard = () => {
    return gameboard;
  };
  const checkForWinner = (playerValue) => {
    // Verifies all array rows to the player value. If a row exists with all player's value, then return.
    for (let row = 0; row <= 2; row++) {
      if (
        Gameboard.getBoard()[row].every((columnValue) => {
          return columnValue === playerValue;
        })
      )
        return true;
    }

    // Verifies all array columns (creates separate column array to check from)
    for (let col = 0; col <= 2; col++) {
      let gameboardColumn = Gameboard.getBoard().map((nestedArray) => {
        return nestedArray[col];
      });
      if (
        gameboardColumn.every((rowValue) => {
          return rowValue === playerValue;
        })
      )
        return true;
    }

    // Verifies whether the diagonals are all the player's values.
    // Diagonal code.................
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
  let validUpdate;
  let gameFinished = false;
  let turn = 0;

  const players = createTwoPlayers();

  while (!gameFinished) {
    currentPlayer = turn % 2;
    validUpdate = false;

    while (!validUpdate) {
      let gridRow = prompt(`What row ${players[currentPlayer].getName()}?`);
      let gridCol = prompt(`What column ${players[currentPlayer].getName()}?`);
      validGrid = Gameboard.updateBoard(
        gridRow,
        gridCol,
        players[currentPlayer].getValue()
      );
    }

    console.log(Gameboard.getBoard());
    gameFinished = Gameboard.checkForWinner(players[currentPlayer].getValue());
    turn++;
  }
}

function createTwoPlayers() {
  let name;
  name = prompt("What is your name?", "Player 1");
  const playerOne = new Player(name, 1);
  name = prompt("What is your name?", "Player 2");
  const playerTwo = new Player(name, 0);
  return [playerOne, playerTwo];
}

TicTacToeGame();
