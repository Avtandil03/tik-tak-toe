import { MOVE_ORDER } from "./constants"

export function getNextMove(currMove, playersCount) {
  const slicedMoveOrders = MOVE_ORDER.slice(0,playersCount)
  const currIndex = MOVE_ORDER.indexOf(currMove)
  return slicedMoveOrders[currIndex+1] ?? MOVE_ORDER[0]
} 

export function computeWinner(cells, sequenceSize = 5, fieldSize = 19){

  function compareElements(indexes){
    let res = true

    for (let i = 1; i < indexes.length; i++) {
      res &&= !!cells[indexes[i]]
      res &&= cells[indexes[i]] === cells[indexes[i-1]]
    }

    return res
  }

  const gap = Math.floor(sequenceSize / 2)

  function getSequenceIndexes(i){

    const res = [
      [], // -
      [], // \
      [], // /
      [], // |
    ]

    for (let j = 0; j < sequenceSize; j++) {
      res[0].push(i-gap+j)
      res[1].push(i-fieldSize*(gap-j)+(j-gap))
      res[2].push(i-fieldSize*(gap-j)-(j-gap))
      res[3].push(i-fieldSize*(gap-j))
    }

    return res
  }

  for(let i = 0; i < cells.length; i++){
    if(cells[i]){
      let indexRows = getSequenceIndexes(i)
      const winnerIndexes = indexRows.find(row => compareElements(row))
  
      if(winnerIndexes) return winnerIndexes
    }
  }
  
  return undefined
}