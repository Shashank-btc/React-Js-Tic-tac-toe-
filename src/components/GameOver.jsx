export default function GameOver({winner, resetGame}){
    return (
        <div id ="game-over">
            <h2>
                Game Over
            </h2>
            {winner && <p>{winner} won</p>}
            {!winner && <p> it's a draw!</p>}

            <p><button onClick={resetGame}>restart</button></p>
        </div>
    )
}