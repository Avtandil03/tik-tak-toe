import { GameLayout } from './ui/game-layout';
import { BackLink } from './ui/back-link';
import { GameTitle } from './ui/game-title';
import { GameInfo } from './ui/game-info';
import { PLAYERS } from './constants';
import { PlayerInfo } from './ui/player-info';
import { GameMoveInfo } from './ui/game-move-info';
import { useGameState } from './model/use-game-state';
import { GameCell } from './ui/game-cell';


const PLAYERS_COUNT = 2

export function Game() {

  const gameState = useGameState(PLAYERS_COUNT)
  const {
    cells,
    currMove, 
    nextMove, 
    handleCellClick, 
    handlePlayerTimeOver, 
    winnerSequence, 
    winnerSymbol
  } = gameState

  const winnerPlayer = PLAYERS.find(player => player.symbol === gameState.winnerSymbol)

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        winnerName={winnerPlayer?.name}
        gameInfo={
          <GameInfo isRatingGame playersCount={PLAYERS_COUNT} timeMode={'1 мин. на ход'} />
        }
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            name={player.name}
            rating={player.rating}
            symbol={player.symbol}
            avatar={player.avatar}
            isRigth={index % 2 === 1}
            isTimerRunning={currMove === player.symbol && !winnerSymbol}
            seconds={60}
          />
        ))}
        gameMoveInfo={<GameMoveInfo currMove={currMove} nextMove={nextMove}/>}
        gameCells={cells?.map((cell, index) => {
          return (
            <GameCell 
              key={index} 
              onClick={() => handleCellClick(index)} 
              disabled={!!winnerSymbol}
              isWinner={winnerSequence?.includes(index)}
              symbol={cell}
            ></GameCell>
          )
        })}
      />
    </>
  );
}
