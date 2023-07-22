import {useState} from 'react'
import clsx from 'clsx'
import React from 'react'
import { UiButton } from '../ui'
import { GameSymbol } from './game-symbol'
import { useGameState } from './use-game-state'



export function GameField({className, playersCount}) {

  const [{cells, currMove, nextMove, handleCellClick}] = useGameState(playersCount)

  const actions = (
    <>
      <UiButton size='md' variant='primary' className='ml-auto'>Ничья</UiButton>
      <UiButton size='md' variant='outline' >Сдаться</UiButton>
    </>
  )

  return (
    <GameFieldLayout className={className} >
      <GameMoveInfo action={actions} currMove={currMove} nextMove={nextMove}>
      </GameMoveInfo >

      <GameGrid className='mt-3'>
        {cells.map((cell, index) => {
          return <GameCell key={index} onClick={() => handleCellClick(index)}>
            {cell && <GameSymbol symbol={cell} className='w-5 h-5'/>}
          </GameCell>
        
        })}
      </GameGrid>

    </GameFieldLayout>
  )
}

function GameFieldLayout({ className, children }) {
  return (
    <div
      className={clsx(className + ' rounded-2xl bg-white shadow-md px-8 pt-5 pb-6 ')}
    >
      {children}
    </div>
  )
}

function GameMoveInfo({ action, currMove, nextMove}) {
  return (
  <div className='flex items-center gap-3'>
    <div>
      <div className='text-lg font-semibold'>Ход: <GameSymbol symbol={currMove} className='w-5 h-5 inline' /></div>
      <div className='text-slate-400 text-xs'>Следующий: <GameSymbol symbol={nextMove} className='w-3 h-3 inline' /></div>
    </div>
    {action}
  </div>
  )
}

function GameGrid({className, children}) {
  return (
    <div className={clsx(className, 'grid grid-cols-[repeat(19,_29px)] grid-rows-[repeat(19,_29px)] border-l border-t border-slate-200 overflow-hidden ')}>
      {children}
    </div>
  )
}

function GameCell({children, onClick, }){
 return (
    <button onClick={onClick} className='border-b border-r border-slate-200 flex items-center justify-center hover:shadow-inner shadow-teal-600'>
      {children}
    </button>
  )
}


