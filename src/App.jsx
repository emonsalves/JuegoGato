import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square"
import { TURNS } from "./constants"
import { checkWinnerFrom, checkEndGame } from "./logic/board"
import { WinnerModal } from "./components/WinnerModal"
import Table from "./components/Table"
import { resetGameToStorage, saveGameToStorage } from "./logic/storage"

function App() {

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    saveGameToStorage({
      board: newBoard,
      turn : newTurn
    })

    const newWinner = checkWinnerFrom(newBoard)

    if (newWinner) {
      confetti()
      setWinner((Winner) => {
        console.log(`Ganador: ${newWinner}, el anterior era: ${Winner} `) 
        return newWinner
      })
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameToStorage()
  }

  return (
    <main className="board">
      <h1> Juego del Gato </h1>
      <button onClick={resetGame}> Reset Game </button>
      <Table updateBoard={updateBoard} board={board} />
      <section className="turn">
        <Square isSelect={turn === TURNS.X}> {TURNS.X} </Square>
        <Square isSelect={turn === TURNS.O}> {TURNS.O} </Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
