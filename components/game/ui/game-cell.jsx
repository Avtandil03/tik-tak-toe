import clsx from "clsx";
import { GameSymbol } from "./game-symbol";

export function GameCell({symbol, onClick, isWinner, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        isWinner && 'bg-orange-600/10',
        !disabled && 'hover:shadow-inner shadow-teal-600',
        'border-b border-r border-slate-200 flex items-center justify-center ',
      )}
    >
      {symbol && <GameSymbol symbol={symbol} className='w-5 h-5' />}
    </button>
  );
}
