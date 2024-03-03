export default function GameBoard({ onSelectSq, board }) {
   /*
   const [gameBoard, setGameBoard] = useState(initialGameBoard);
   function handleSelectSq(rowIndex, colIndex) {
      setGameBoard((prevGameBoard) => {
         const updatedBoard = [
            ...prevGameBoard.map((innerArr) => [...innerArr]),
         ];
         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
         return updatedBoard;
         // updating state in immutable way -> since obj./arr. are referenced in JS and we updating the old val. in-memory -> even before the state update is scheduled in react -> leads to bugs when multiple places ref. the same memory for state update from diff places
      });

      onSelectSq();
   }
   */

   return (
      <ol id="game-board">
         {board.map((row, rowIndex) => (
            <li key={rowIndex}>
               <ol>
                  {row.map((playerSymbol, colIndex) => (
                     <li key={colIndex}>
                        <button
                           onClick={() => onSelectSq(rowIndex, colIndex)}
                           disabled={playerSymbol}
                        >
                           {playerSymbol}
                        </button>
                     </li>
                  ))}
               </ol>
            </li>
         ))}
      </ol>
   );
}
