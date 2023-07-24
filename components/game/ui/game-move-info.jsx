import { GameSymbol } from "./game-symbol";

export function GameMoveInfo({currMove, nextMove}){
  return (
    <>
      <div>
        <div className='text-lg font-semibold'>
          Ход: <GameSymbol symbol={currMove} className='w-5 h-5 inline' />
        </div>
        <div className='text-slate-400 text-xs'>
          Следующий: <GameSymbol symbol={nextMove} className='w-3 h-3 inline' />
        </div>
      </div>
    </>
  )
}