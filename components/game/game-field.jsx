import clsx from 'clsx'
import React from 'react'
import ZeroIcon from './icons/zero-icon'
import CrossIcon from './icons/cross-icon'
import UiButton from '../ui/ui-button'

const cells = new Array(19*19).fill(null)

export default function GameField({className}) {
  return (
    <div
    className={clsx(className + ' rounded-2xl bg-white shadow-md px-8 pt-5 pb-6 ')}
    >
      <div className='flex items-center gap-3'>
        <div>
          <div className= 'text-lg font-semibold'>Ход: <ZeroIcon className='w-5 h-5 inline'/></div>
          <div className='text-slate-400 text-xs'>Следующий: <CrossIcon className='inline'/></div>
        </div>
        <UiButton size='md' variant='primary' className='ml-auto'>Ничья</UiButton>
        <UiButton size='md' variant='outline' >Сдаться</UiButton>
      </div>

      <div className='grid grid-cols-[repeat(19,_29px)] grid-rows-[repeat(19,_29px)] border-l border-t border-slate-200 overflow-hidden mt-3'>
        {cells.map((_, i) => (
          <button key={i} className='border-b border-r border-slate-200 flex items-center justify-center'>
            {/* <ZeroIcon className={'w-5 h-5'}/> */}
          </button>
        ))}
      </div>

    </div>
  )
}
