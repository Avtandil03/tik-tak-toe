export function computePlayerTimer(gameState, playerSymbol){

  return {
    timer: gameState.timers[playerSymbol],
    timerStartAt: 
      playerSymbol === gameState.currMove 
        ? gameState.currMoveStart 
        : undefined

  }
}