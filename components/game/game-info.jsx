import clsx from 'clsx';
import { Profile } from '../profile';
import {TringleIcon} from './icons/tringle-icon';
import { UiDevider } from '../ui';

export function GameInfo({ className }) {
  return (
    <div
      className={clsx(className + ' rounded-2xl bg-white shadow-md px-8 py-4 items-center flex-col')}
    >
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <div className="relative w-44  text-teal-600">
            <div className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-white shadow-sm p-1">
              <TringleIcon />
            </div>
            <Profile />
          </div>
          <UiDevider className="mx-3" />
          <div className='text-lg font-semibold' >01:08</div>
        </div>
        <div className='flex items-center'>
          <div className='text-lg font-semibold' >01:08</div>
          <UiDevider className="mx-3" />
          <div className="relative w-44 text-teal-600">
            <div className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-white shadow-sm p-1">
              <TringleIcon />
            </div>
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
}
