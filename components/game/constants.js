export const GAME_SYMBOLS = {
  ZERO: 'ZERO',
  CROSS: 'CROSS',
  TRIGLE: 'TRINGLE',
  SQUARE: 'SQUARE',
}

export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.TRIGLE,
  GAME_SYMBOLS.SQUARE,
]

//temp below
import ava1 from './ui/images/user1.png'
import ava2 from './ui/images/user2.png'
import ava3 from './ui/images/user3.png'
import ava4 from './ui/images/user4.png'

export const PLAYERS = [
  {id: 1,name: 'avtan', rating: 777, avatar:ava1 , symbol: GAME_SYMBOLS.CROSS},
  {id: 2,name: 'jony', rating: 727, avatar:ava2 , symbol: GAME_SYMBOLS.ZERO},
  {id: 3,name: 'mirlan', rating: 778, avatar:ava3 , symbol: GAME_SYMBOLS.TRIGLE},
  {id: 4,name: 'valentinashevchenko', rating: 545, avatar:ava4 , symbol: GAME_SYMBOLS.SQUARE},
] 