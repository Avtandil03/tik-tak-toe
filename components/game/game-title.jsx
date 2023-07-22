import Link from "next/link";
import {ArrowLeftIcon} from "./icons/arrow-left-icon";
import {StarIcon} from "./icons/star-icon";
import {UserIcon} from "./icons/user-icon";
import {HistoryIcon} from "./icons/history-icon";

export function GameTitle({playersCount}) {
  return (
    <div className='pl-2 '>
      <Link href='#' className='text-teal-600 hover:text-teal-500 transition-colors flex items-center'>
        <ArrowLeftIcon/>
        <p className='pl-2 text-xs'>На главную</p>
      </Link>
      <h1 className='text-4xl'>Крестики нолики</h1>
      <div className='text-xs text-slate-400 flex items-center gap-3'>
        <StarIcon/> 
        <div className='flex items-center gap-2'>
          <UserIcon className='pl-3'/>{playersCount}
        </div>
         <div className='flex items-center gap-2'>
          <HistoryIcon className='pl-3'/>{1} мин на ход</div>
         </div>
        
    </div>
  )
}
