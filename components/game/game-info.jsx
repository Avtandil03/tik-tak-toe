import clsx from 'clsx';
import { Profile } from '../profile';
import { UiDevider } from '../ui';
import { GameSymbol } from './game-symbol';
import { GAME_SYMBOLS } from './constants';
import ava1 from './images/user1.png'
import ava2 from './images/user2.png'
import ava3 from './images/user3.png'
import ava4 from './images/user4.png'

const players = [
  {id: 1,name: 'avtan', rating: 777, avatar:ava1 , symbol: GAME_SYMBOLS.CROSS},
  {id: 2,name: 'jony', rating: 727, avatar:ava2 , symbol: GAME_SYMBOLS.ZERO},
  {id: 3,name: 'mirlan', rating: 778, avatar:ava3 , symbol: GAME_SYMBOLS.TRIGLE},
  {id: 4,name: 'valentinashevchenko', rating: 545, avatar:ava4 , symbol: GAME_SYMBOLS.SQUARE},
]          
                
export function GameInfo({ className, playersCount }) {
  return (
    <div
      className={clsx(className + ' rounded-2xl bg-white shadow-md px-8 py-4 items-center grid grid-cols-2 gap-3')}
    >
      {players.slice(0, playersCount).map((player, i) => <PlayerInfo key={player.id} playerInfo={player} isRigth={i % 2===1}/>)}
    </div>
  );
}

function PlayerInfo({playerInfo, isRigth}) {
  const {name, rating, avatar, symbol} = playerInfo

  return (
    <div className={clsx(isRigth && 'ml-auto','flex items-center')}>
      <div className={clsx(isRigth && 'order-3', "relative w-44  text-teal-600")}>
        <div className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-white shadow-sm p-1">
          <GameSymbol symbol={symbol}/>
        </div>
        <Profile name={name} avatar={avatar} rating={rating}/>
      </div>
      <UiDevider className="mx-3 order-2" />
      <div className={clsx(isRigth && 'order-1', 'text-lg font-semibold')} >01:08</div>
    </div>
  )
}

