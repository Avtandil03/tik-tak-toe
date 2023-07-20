import Image from 'next/image';
import logoSrc from './icons/logo.svg';
import Profile from '../profile/profile';
import ArrowDownIcon from './icons/arrow-down-icon';
import Devider from '../ui/devider';
export default function Header() {
  return (
    <header className="flex items-center h-24 px-8 bg-white shadow-md">
      <Image src={logoSrc} alt="logo.svg" />
      <Devider className={'mx-6'}/>
      <button className="h-11 w-44 bg-teal-600 hover:bg-teal-500 text-white text-xl rounded-lg transition-colors">
        Играть
      </button>
      <button className='flex items-center ml-auto text-teal-600 hover:text-teal-500 transition-colors'>
        <Profile/>
        <ArrowDownIcon className={'ml-2'}/>
      </button>
    </header>
  );
}
