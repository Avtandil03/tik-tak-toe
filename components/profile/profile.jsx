import Image from 'next/image';
import defaultAvatarSrc from './icons/default-avatar.svg'

export function Profile({name, rating, avatar}) {
  return (
    <div className="flex items-center text-start ">
      <Image className="w-12 h-12" width={500} height={500} src={avatar??defaultAvatarSrc} alt="avatar.png" />
      <div className='ml-2 overflow-hidden'>
        <p className="text-lg truncate">{name}</p>
        <p className="text-slate-400 text-xs">Рейтинг: {rating}</p>
      </div>
    </div>
  );
}
