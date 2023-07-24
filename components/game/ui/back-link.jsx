import Link from 'next/link'
import {ArrowLeftIcon} from './icons/arrow-left-icon'

export function BackLink(){
  return(
    <Link href='#' className='text-teal-600 hover:text-teal-500 transition-colors flex items-center'>
      <ArrowLeftIcon/>
      <p className='pl-2 text-xs'>На главную</p>
    </Link>
  )
}