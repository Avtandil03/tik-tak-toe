import {useState} from 'react'
import { GAME_SYMBOLS, MOVE_ORDER } from './constants'


function getNextMove(currMove) {
  const currIndex = MOVE_ORDER.indexOf(currMove)
  return MOVE_ORDER[currIndex+1] ?? MOVE_ORDER[0]
} 

export function useGameState() {
  const [{currMove, cells}, setGameState] = useState(() => ({
    cells: new Array(19*19).fill(null),
    currMove: GAME_SYMBOLS.ZERO
  }))

  function handleCellClick(index) {
    setGameState(lastGameState => {
      if(lastGameState.cells[index]){
        return lastGameState
      }
      return ({
        ...lastGameState,
        currMove: getNextMove(lastGameState.currMove),
        cells: lastGameState.cells.map((cell, i) => {
          return i === index ? lastGameState.currMove : cell
        })
      })
    })
  }

  
  const nextMove = getNextMove(currMove)


  return [{cells, currMove, nextMove, handleCellClick}]
}