export function computeWinnerSymbol(gameState, {winnerSequence, nextMove}){
  return nextMove === gameState.currMove ? gameState.currMove : gameState.cells[winnerSequence?.[0]]
}