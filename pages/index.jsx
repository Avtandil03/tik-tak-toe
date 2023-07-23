import { useState } from "react";
import { GameField, GameInfo, GameSymbol, GameTitle, useGameState } from "../components/game";
import { Header } from "../components/header";
import { GAME_SYMBOLS } from "../components/game/constants";


export default function HomePage() {
  
  const [playersCount] = useState(4)
  const [gameState] = useGameState(playersCount)
  const {cells, currMove, nextMove, handleCellClick, handlePlayerTimeOver, winnerSequence, winnerSymbol} = gameState


  return (
  <div className='bg-slate-50 min-h-screen'>
    <Header/>
    <main className='pt-6 mx-auto max-w-[616px]'>
      <GameTitle playersCount={playersCount}/>
      <GameInfo 
        className={'mt-4'} 
        playersCount={playersCount} 
        currMove={currMove} 
        isWinner={!!winnerSymbol}
        onPlayerTimeOver={handlePlayerTimeOver}
      />
      {winnerSymbol && <div><GameSymbol symbol={winnerSymbol}/></div>}
      <GameField className={'mt-5'} {...gameState} />
    </main>
  </div>
)}
