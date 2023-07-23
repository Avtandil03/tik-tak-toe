import {useState} from 'react'
import { GAME_SYMBOLS } from './constants'
import { computeWinner, getNextMove } from './model'


export function useGameState(playersCount) {

  const [{currMove, cells, playersTimeOver}, setGameState] = useState(() => 
  ({
    cells: new Array(19*19).fill(null),
    currMove: GAME_SYMBOLS.CROSS,
    playersTimeOver: []
  })) 

  const winnerSequence = computeWinner(cells)
  const nextMove = getNextMove(currMove, playersCount, playersTimeOver)

  const winnerSymbol = nextMove === currMove ? currMove : winnerSequence?.[0]


  function handleCellClick(index) {
    setGameState(lastGameState => {
      if(lastGameState.cells[index]){
        return lastGameState
      }
      return ({
        ...lastGameState,
        currMove: getNextMove(lastGameState.currMove, playersCount, lastGameState.playersTimeOver),
        cells: lastGameState.cells.map((cell, i) => {
          return i === index ? lastGameState.currMove : cell
        })
      })
    })
  }

  function handlePlayerTimeOver(symbol) {
    setGameState(lastGameState => {
      return ({
        ...lastGameState,
        playersTimeOver: [...lastGameState.playersTimeOver, symbol],
        currMove: getNextMove(lastGameState.currMove, playersCount, lastGameState.playersTimeOver),
      })
    })
  }

  return [{cells, currMove, nextMove, handleCellClick, handlePlayerTimeOver, winnerSequence, winnerSymbol}]
}
