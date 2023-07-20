import clsx from 'clsx';
import Profile from '../profile/profile';
import CrossIcon from './icons/cross-icon';
import ZeroIcon from './icons/zero-icon';
import SquareIcon from './icons/square-icon';
import TringleIcon from './icons/tringle-icon';
import Devider from '../ui/devider';
import Timer from '../ui/Timer';

export default function GameInfo({ className }) {
  return (
    <div
      className={clsx(className + ' rounded-2xl bg-white shadow-md px-8 py-4 items-center flex-col')}
    >
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <div className="relative w-44">
            <div className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-white shadow-sm p-1">
              <TringleIcon />
            </div>
            <Profile />
          </div>
          <Devider className="mx-3" />
          <Timer />
        </div>
        <div className='flex items-center'>
          <Timer />
          <Devider className="mx-3" />
          <div className="relative w-44">
            <div className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-white shadow-sm p-1">
              <TringleIcon />
            </div>
            <Profile />
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center mt-3'>
        <div className='flex items-center'>
          <div className="relative w-44">
            <div className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-white shadow-sm p-1">
              <TringleIcon />
            </div>
            <Profile />
          </div>
          <Devider className="mx-3" />
          <Timer />
        </div>
        <div className='flex items-center'>
          <Timer />
          <Devider className="mx-3" />
          <div className="relative w-44">
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
