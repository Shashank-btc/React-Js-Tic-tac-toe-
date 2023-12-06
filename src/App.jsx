import { useState } from "react"
import Player from "./components/Players"
import GameBoaed from "./components/GameBoaed"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./assets/winning-combinations"
import GameOver from "./components/GameOver"


const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function App() {
  const [gameTurm, setGameTurn] = useState([])
  // const [activePlayer, setActivePlayer] = useState("X")

  const activePlayer = deriveActivePlayer(gameTurm);
  
  let updateBox = [...initialGameBoard.map((array) =>[...array])]
  let winner;

  for(const turn of gameTurm){
      const {square, player} = turn
      const {row, col} = square
      updateBox[row][col] = player
      console.log(player)
  }
for(const combinatoin of WINNING_COMBINATIONS) {
  const firstSquareSymbol = updateBox[combinatoin[0].row][combinatoin[0].column]
  const secondSquareSymbol =updateBox[combinatoin[1].row][combinatoin[1].column]
  const thirdSquareSymbol = updateBox[combinatoin[2].row][combinatoin[2].column]

  if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
    winner = firstSquareSymbol
  }
}

const hasDraw = gameTurm.length === 9 && !winner


function restartGame() {
  setGameTurn([])
  // updateBox([])
  // setActivePlayer('X')
}



  function handleSelecteSquare(rowIndex, colIndex) {
    // setActivePlayer((currentPlayer) => currentPlayer === "X" ? "O" : "X")
    setGameTurn((prevTurn) => {
      let currentAcrivePlayer = deriveActivePlayer(prevTurn)
      // if (prevTurn.length > 0 && prevTurn[0].player === 'X') {
      //   currentAcrivePlayer = 'O'
      // }
      
      const updateTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentAcrivePlayer },
        ...prevTurn];
      return updateTurn;
    })
    console.log(rowIndex +"col"+ colIndex)
  }

  return (
    <main>
      <div id="game-container">
        {(winner || hasDraw) && <GameOver winner={winner} reset={restartGame}/>}
        <ol id="players" className="highlight-player">
          <Player name={"Player 1"} symbol={"X"} isActive={activePlayer === 'X'} />
          <Player name={"Player 2"} symbol={"O"} isActive={activePlayer === 'O'} />
        </ol>
        <GameBoaed onSelectSquare={handleSelecteSquare} turns={updateBox} />
      </div>
      <Log turns={gameTurm} />
    </main>
  )
}

export default App
