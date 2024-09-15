export type CardType = 'major' | 'minor';
export type SuitType = 'wands' | 'cups' | 'pentacles' | 'swords';
export type CourtType = 'kings' | 'queens' | 'knights' | 'pages' | 'king' | 'queen' | 'knight' | 'page';
export type TarotCardT = {
  name_short: string;
  name: string;
  value: string;
  value_int: number;
  type: CardType;
  meaning_up: string;
  meaning_rev: string;
  desc: string;
  suit?: SuitType;
}
export type TarotCardListT = {
  nhits: number;
  cards: TarotCardT[]
};
