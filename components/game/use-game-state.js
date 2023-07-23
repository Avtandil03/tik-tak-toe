import {useState} from 'react'
import { GAME_SYMBOLS } from './constants'
import { computeWinner, getNextMove } from './model'


export function useGameState(playersCount) {

  const [{currMove, cells}, setGameState] = useState(() => 
  ({
    cells: new Array(19*19).fill(null),
    currMove: GAME_SYMBOLS.CROSS
  })) 

  const winnerSequence = computeWinner(cells)
  const nextMove = getNextMove(currMove, playersCount)


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

  return [{cells, currMove, nextMove, handleCellClick, winnerSequence}]
}