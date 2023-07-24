import { GameOverModal } from "./game-over-modal";

export function GameLayout({
  backLink,
  title,
  gameInfo,
  playersList,
  gameMoveInfo,
  action,
  gameCells,
  winnerName
}) {
  return (
    <>
      <div className="pb-10">
        <div className="pl-2 ">
          {backLink}
          {title}
          {gameInfo}
        </div>
        <div
          className={
            'mt-6 rounded-2xl bg-white shadow-md px-8 py-4 items-center grid grid-cols-2 gap-3'
          }
        >
          {playersList}
        </div>

        <div className={'mt-6 rounded-2xl bg-white shadow-md px-8 pt-5 pb-6 '}>
          <div className="flex items-center gap-3">
            {gameMoveInfo}
            {action}
          </div>
          <div
            className="mt-6 grid grid-cols-[repeat(19,_29px)] grid-rows-[repeat(19,_29px)] 
        border-l border-t border-slate-200 overflow-hidden"
          >
            {gameCells}
          </div>
        </div>
      </div>
      <GameOverModal playersList={playersList} winnerName={winnerName}/>
    </>
  );
}
