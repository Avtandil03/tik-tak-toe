import { GameLayout } from './ui/game-layout';
import { BackLink } from './ui/back-link';
import { GameTitle } from './ui/game-title';
import { GameInfo } from './ui/game-info';
import { PLAYERS } from './constants';
import { PlayerInfo } from './ui/player-info';
import { GameMoveInfo } from './ui/game-move-info';
import {
  GAME_STATE_ACTIONS,
  gameStateReducer,
  initialState,
} from './model/game-state-reducer';
import { GameCell } from './ui/game-cell';
import { getNextMove } from './model/get-next-move';
import { computeWinnerSymbol } from './model/compute-winner-symbol';
import { useReducer } from 'react';
import { computeWinner } from './model/compute-winner';
import { GameOverModal } from './ui/game-over-modal';
import { computePlayerTimer } from './model/compute-player-timer';

const PLAYERS_COUNT = 4;

export function Game() {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    { playersCount: PLAYERS_COUNT, currMoveStart: Date.now(), defaultTimer: 6000 },
    initialState,
  );
  const { cells, currMove, currMoveStart, timers } = gameState;

  const winnerSequence = computeWinner(gameState);
  const nextMove = getNextMove(gameState);
  const winnerSymbol = computeWinnerSymbol(gameState, {
    winnerSequence,
    nextMove,
  });

  const winnerPlayer = PLAYERS.find(
    (player) => player.symbol === winnerSymbol,
  );

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        winnerName={winnerPlayer?.name}
        gameInfo={
          <GameInfo
            isRatingGame
            playersCount={PLAYERS_COUNT}
            timeMode={'1 мин. на ход'}
          />
        }
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {

          const {timer, timerStartAt} = computePlayerTimer(gameState, player.symbol)

          return <PlayerInfo
            key={player.id}
            name={player.name}
            rating={player.rating}
            symbol={player.symbol}
            avatar={player.avatar}
            isRigth={index % 2 === 1}
            timer={timer}
            timerStartAt={timerStartAt}
          />
        })}
        gameMoveInfo={<GameMoveInfo currMove={currMove} nextMove={nextMove} />}
        gameCells={cells?.map((cell, index) => {
          return (
            <GameCell
              key={index}
              onClick={() => {
                dispatch({
                  type: GAME_STATE_ACTIONS.CELL_CLICK,
                  index,
                  now: Date.now()
                });
              }}
              disabled={!!winnerSymbol}
              isWinner={winnerSequence?.includes(index)}
              symbol={cell}
            ></GameCell>
          );
        })}
      />

      <GameOverModal
        winnerName={winnerPlayer?.name}
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {

          const {timer, timerStartAt} = computePlayerTimer(gameState, player.symbol)

          return <PlayerInfo
            key={player.id}
            name={player.name}
            rating={player.rating}
            symbol={player.symbol}
            avatar={player.avatar}
            isRigth={index % 2 === 1}
            timer={timer}
            timerStartAt={timerStartAt}
          />
        })}
      />
    </>
  );
}
