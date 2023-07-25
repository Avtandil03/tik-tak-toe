import { MOVE_ORDER } from "../constants";


export function getNextMove(gameState) {
  const {currMove, playersCount, timers} = gameState 
  const slicedMoveOrders = MOVE_ORDER.slice(0, playersCount);
  const filteredFromPlayersTimeOver = slicedMoveOrders.filter(symbol => {
    return timers[symbol]  > 0
  });
  const currIndex = filteredFromPlayersTimeOver.indexOf(currMove);
  return filteredFromPlayersTimeOver[currIndex + 1] ?? filteredFromPlayersTimeOver[0];
}
