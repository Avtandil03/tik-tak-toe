import { HistoryIcon } from "./icons/history-icon";
import { UserIcon } from "./icons/user-icon";
import { StarIcon } from "./icons/star-icon";

export function GameInfo({playersCount, isRatingGame, timeMode}) {
  return (
    <div className="text-xs text-slate-400 flex items-center gap-3">
      {isRatingGame && <StarIcon />}
      <div className="flex items-center gap-2">
        <UserIcon className="pl-3" />
        {playersCount}
      </div>
      <div className="flex items-center gap-2">
        <HistoryIcon className="pl-3" />
        {timeMode}
      </div>
    </div>
  )
}
