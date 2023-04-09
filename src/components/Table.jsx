import { Square } from "./Square"

function Table({ board, updateBoard }) {
  return (
    <section className="game">
      {board.map((square, index) => {
        return (
          <Square key={index} index={index} updateBoard={updateBoard} >
            {square}
          </Square>)
      })}
    </section>
  )
}
export default Table