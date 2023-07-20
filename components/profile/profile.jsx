import Image from 'next/image';
import avatarSrc from './icons/avatar.png'


export default function Profile() {
  return (
    <div className="flex items-center text-start ">
      <Image className="w-12 h-12" src={avatarSrc} alt="avatar.png" />
      <div className='ml-2'>
        <p className="text-lg">Paromovevg</p>
        <p className="text-slate-400 text-xs">Рейтинг: {1230}</p>
      </div>
    </div>
  );
}
