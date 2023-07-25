import clsx from 'clsx';
import { GameSymbol } from './game-symbol';
import Image from 'next/image';
import { useNow } from '../../lib/timers';

export function PlayerInfo({
  isRigth,
  symbol,
  name,
  rating,
  avatar,
  timer,
  timerStartAt
}) {

  const now = useNow(1000, !!timerStartAt)
  const mils = Math.max(now ? timer - (now - timerStartAt) : timer, 0)
  const seconds = Math.ceil(mils / 1000)
  const secondsString = String(seconds % 60).padStart(2, '0');
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, '0');

  const isTimeDanger = seconds < 10;

  function getTimerColor() {
    if (timerStartAt) {
      return isTimeDanger ? 'text-orange-600' : 'text-slate-900';
    }
    return 'text-gray-200';
  }

  return (
    <div className={clsx(isRigth && 'ml-auto', 'flex items-center')}>
      <div
        className={clsx(
          isRigth ? 'order-3' : 'order-1',
          'relative w-44  text-teal-600',
        )}
      >
        <div className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-white shadow-sm p-1">
          <GameSymbol symbol={symbol} />
        </div>
        <div className="flex items-center text-start ">
          <Image
            className="w-12 h-12"
            src={avatar ?? defaultAvatarSrc}
            alt="avatar.png"
          />
          <div className="ml-2 overflow-hidden">
            <p className="text-lg truncate">{name}</p>
            <p className="text-slate-400 text-xs">Рейтинг: {rating}</p>
          </div>
        </div>
      </div>
      <div className="mx-3 order-2 h-8 w-px bg-slate-200"></div>
      <div
        className={clsx(
          isRigth ? 'order-1' : 'order-3',
          getTimerColor(),
          'text-lg font-semibold w-14',
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
