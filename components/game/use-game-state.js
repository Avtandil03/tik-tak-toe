import {useState} from 'react'
import { GAME_SYMBOLS, MOVE_ORDER } from './constants'


function getNextMove(currMove, playersCount) {
  const slicedMoveOrders = MOVE_ORDER.slice(0,playersCount)
  const currIndex = MOVE_ORDER.indexOf(currMove)
  return slicedMoveOrders[currIndex+1] ?? MOVE_ORDER[0]
} 

export function useGameState(playersCount) {

  const [{currMove, cells}, setGameState] = useState(() => 
  ({
    cells: new Array(19*19).fill(null),
    currMove: GAME_SYMBOLS.CROSS
  }))

  function handleCellClick(index) {
    setGameState(lastGameState => {
      if(lastGameState.cells[index]){
        return lastGameState
      }
      return ({
        ...lastGameState,
        currMove: getNextMove(lastGameState.currMove, playersCount),
        cells: lastGameState.cells.map((cell, i) => {
          return i === index ? lastGameState.currMove : cell
        })
      })
    })
  }

  
  const nextMove = getNextMove(currMove, playersCount)


  return [{cells, currMove, nextMove, handleCellClick}]
}