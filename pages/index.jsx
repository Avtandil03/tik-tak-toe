import { useState } from "react";
import { GameField, GameInfo, GameTitle } from "../components/game";
import { Header } from "../components/header";


export default function HomePage() {

  const [playersCount] = useState(2)

  return (
  <div className='bg-slate-50 min-h-screen'>
    <Header/>
    <main className='pt-6 mx-auto max-w-[616px]'>
      <GameTitle playersCount={playersCount}/>
      <GameInfo className={'mt-4'} playersCount={playersCount}/>
      <GameField className={'mt-5'} playersCount={playersCount}/>
    </main>
  </div>
)}
