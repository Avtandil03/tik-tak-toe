import { MOVE_ORDER } from "../constants";


export function getNextMove(currMove, playersCount, playersTimeOver) {
  const slicedMoveOrders = MOVE_ORDER.slice(0, playersCount);
  const filteredFromPlayersTimeOver = slicedMoveOrders.filter(symbol => {
    return !playersTimeOver.includes(symbol);
  });
  const currIndex = filteredFromPlayersTimeOver.indexOf(currMove);
  return filteredFromPlayersTimeOver[currIndex + 1] ?? filteredFromPlayersTimeOver[0];
}
