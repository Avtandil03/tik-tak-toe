import { GAME_SYMBOLS, MOVE_ORDER } from '../constants';
import { getNextMove } from './get-next-move';


export const GAME_STATE_ACTIONS = {
  CELL_CLICK: 'CELL_CLICK',
  TICK: 'TICK'
};

export const initialState = ({ playersCount, defaultTimer, currMoveStart }) => ({
  cells: new Array(19 * 19).fill(null),
  currMove: GAME_SYMBOLS.CROSS,
  currMoveStart,
  playersCount,
  timers: MOVE_ORDER.reduce((timers, symbol, index) => {
    if(index < playersCount){
      timers[symbol] = defaultTimer
    }
    return timers
  } , {})
});

export const gameStateReducer = (state, action) => {

  const {type, index, now} = action

  switch (type) {
    case GAME_STATE_ACTIONS.CELL_CLICK:
      if (state.cells[index]) {
        return state;
      }
      
      return ({
        ...state,
        currMove: getNextMove(state),
        currMoveStart: now,
        cells: updateCell(state, index),
        timers: updateTimers(state, now, index)
      });
    case GAME_STATE_ACTIONS.TICK: 
      if(!isTimeOver(state, now)) return state
      return({
        ...state,
        currMove: getNextMove(state),
        currMoveStart: now,
        timers: updateTimers(state, now, index)
      })

    default:
      return state;
  }
};

function updateCell(gameState, index){
  return gameState.cells.map((cell, i) => {
    return i === index ? gameState.currMove : cell;
  })
}

function updateTimers(gameState, now){
  const diff = now - gameState.currMoveStart
  const timer = gameState.timers[gameState.currMove]

  return {
    ...gameState.timers, 
    [gameState.currMove]: timer - diff
  }
}

function isTimeOver(state, now){
  const timer = updateTimers(state, now)[state.currMove]

  return timer <= 0
}