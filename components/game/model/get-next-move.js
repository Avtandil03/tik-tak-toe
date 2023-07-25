import { MOVE_ORDER } from "../constants";


export function getNextMove(gameState, playersTimeOver = [] ) {
  const {currMove, playersCount} = gameState  
  const slicedMoveOrders = MOVE_ORDER.slice(0, playersCount);
  const filteredFromPlayersTimeOver = slicedMoveOrders.filter(symbol => {
    
    return playersTimeOver.indexOf(symbol) === -1  
  });
  const currIndex = filteredFromPlayersTimeOver.indexOf(currMove);
  return filteredFromPlayersTimeOver[currIndex + 1] ?? filteredFromPlayersTimeOver[0];
}
