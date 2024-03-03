import { useState } from "react";

import GameBoard from "./componenets/GameBoard";
import Player from "./componenets/Player";
import Log from "./componenets/Log";
import GameOver from "./componenets/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const PLAYERS = {
   X: "Player 1",
   O: "Player 2",
};

const INITIAL_GAME_BOARD = [
   [null, null, null],
   [null, null, null],
   [null, null, null],
];

function deriveGameBoard(gameTurns) {
   let gameBoard = [...INITIAL_GAME_BOARD.map((arr) => [...arr])];

   for (const turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square;

      gameBoard[row][col] = player;
      // assigning a derived state to the gameBoard
   }

   return gameBoard;
}

function deriveActivePlayer(gameTurns) {
   let currPlayer = "X";
   if (gameTurns.length > 0 && gameTurns[0].player === "X") {
      currPlayer = "O";
   }
   return currPlayer;
}

function deriveWinner(gameBoard, players) {
   let winner;

   for (const comb of WINNING_COMBINATIONS) {
      const firstSquareSymbol = gameBoard[comb[0].row][comb[0].column];
      const secondSquareSymbol = gameBoard[comb[1].row][comb[1].column];
      const thirdSquareSymbol = gameBoard[comb[2].row][comb[2].column];

      if (
         firstSquareSymbol &&
         firstSquareSymbol === secondSquareSymbol &&
         firstSquareSymbol === thirdSquareSymbol
      ) {
         winner = players[firstSquareSymbol];
      }
   }

   return winner;
}

function App() {
   // const [acticePlayer, setActivePlayer] = useState("X");
   // const [hasWinner, setHasWinner] = useState(false);
   const [gameTurns, setGameTurns] = useState([]);
   const [players, setPlayers] = useState(PLAYERS);

   const activePlayer = deriveActivePlayer(gameTurns);
   const gameBoard = deriveGameBoard(gameTurns);
   const winner = deriveWinner(gameBoard, players);
   const hasDraw = gameTurns.length === 9 && !winner;

   function handleSelectedSq(rowIndex, colIndex) {
      // setActivePlayer((currActivePlayer) => currActivePlayer === "X" ? "O" : "X" );
      setGameTurns((prevTurns) => {
         const currPlayer = deriveActivePlayer(prevTurns);

         const updatedTurns = [
            { square: { row: rowIndex, col: colIndex }, player: currPlayer },
            ...prevTurns,
         ];
         return updatedTurns;
      });
   }

   function handleRestart() {
      setGameTurns([]);
   }

   function handlePlayerNameChange(symbol, newName) {
      setPlayers((prevPlayers) => {
         return {
            ...prevPlayers,
            [symbol]: newName,
         };
      });
   }

   return (
      <main>
         <div id="game-container">
            <ol id="players" className="highlight-player">
               <Player
                  initialName={PLAYERS.X}
                  symbol="X"
                  isActive={activePlayer === "X"}
                  onChangeName={handlePlayerNameChange}
               />
               <Player
                  initialName={PLAYERS.O}
                  symbol="O"
                  isActive={activePlayer === "O"}
                  onChangeName={handlePlayerNameChange}
               />
            </ol>
            {(winner || hasDraw) && (
               <GameOver winner={winner} onRestart={handleRestart} />
            )}
            <GameBoard onSelectSq={handleSelectedSq} board={gameBoard} />
         </div>
         <Log turns={gameTurns} />
      </main>
   );
}

// imgaes to be used in compo. should be put inside the src/assets/ folder; img. not handled by the build process -> in public/ folder

export default App;
