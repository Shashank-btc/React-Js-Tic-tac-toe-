import { useState } from "react";


export default function GameBoaed({ onSelectSquare, turns }) {

   
    // console.log(player)
    //  const [updateBox, setUpdateBox ] = useState(initialGameBoard)

    //  function handleBoxClick(rowIndex, colIndex){
    //    setUpdateBox((preGameBoard) => {
    //     const upDateBoard = [...preGameBoard].map((innerArray)=>[...innerArray])
    //     upDateBoard[rowIndex][colIndex] = activePlayerSymbol
    //     return upDateBoard;
    //    })
    //    onSelectSquare();
    //  }


    return <ol id="game-board">
        {turns.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((col, colIndex) => 
                    <li key={colIndex}>
                        <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={col !== null}>{col}</button>
                    </li>
                )}
            </ol>
        </li>)}
    </ol>
}