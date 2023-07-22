import Image from 'next/image';
import logoSrc from './icons/logo.svg';
import Profile from '../profile/profile';
import ArrowDownIcon from './icons/arrow-down-icon';
import UiDevider from '../ui/ui-devider';
import UiButton from '../ui/ui-button';
export default function Header() {
  return (
    <header className="flex items-center h-24 px-8 bg-white shadow-md">
      <Image src={logoSrc} alt="logo.svg" />
      <UiDevider className={'mx-6'}/>
      <UiButton size='lg' variant='primary' className='w-44'>
        Играть
      </UiButton>
      <button className=' flex items-center ml-auto text-teal-600 hover:text-teal-500 transition-colors'>
        <Profile/>
        <ArrowDownIcon className={'ml-2'}/>
      </button>
    </header>
  );
}
