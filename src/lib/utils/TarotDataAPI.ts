import { error } from "@sveltejs/kit";
import type { SuitType, CourtType, CardType, TarotCardT } from '$lib/types/tarot';

const apiPaths = {
  cards: '/cards', // returns all cards
  courts: '/courts',
  bySuit: 
    (suit?: SuitType) => !suit ? error(400, 'bad request: invalid suit') : `/cards/suits/${suit}`, // returns all cards of a given suit
  byCourt: 
    (rank?: CourtType ) => !rank ? error(400, 'bad request: invalid court') : `/cards/courts/${rank}`,
  random: (count?: number) => !count ? '/cards/random' : `/cards/random?n=${count}`,
  search: 
    (query: string, suit?: SuitType, value?: number, type?: CardType) => {
    if (!query) {
      return error(400, 'bad request: invalid query');
    }
    let search= `?q=${query}`;
    if (suit) search+= `&suit=${suit}`;
    if (value) search+= `&value=${value}`;
    if (type) search+= `&type=${type}`;
    return `/cards/search${search}`;
  }
}

const getCardDirectory = (card: TarotCardT): string => {
  let path: string = '/images/tarot/cards/';
  if (card.type === 'major') {
    path += 'major';
  }
  if (card.type === 'minor') {
    path += card.suit?.toLowerCase() || '';
  }
  return path;
}
const getCardFileName = (card: TarotCardT): string => {
  let fileName: string = '';
  const rank = card.value_int < 10 ? `0${card.value_int}` : `${card.value_int}`;
  if (card.type  === 'major') {
    const name = card.name.replace(/\s/g, '')
    fileName += `/${rank}-${name}.jpg`;
  }
  if (card.type === 'minor') {
    if (card.suit !== undefined) {
    const name = card.suit.split('');
    name[0] = name[0].toUpperCase();
    fileName += `/${name.join('')}${rank}.jpg`
    }
  }
  return fileName;
}
export class TarotDataAPI {
  public domain: string = 'https://tarotapi.dev/api/v1';
  public paths = apiPaths;
  public getCardImagePath = (card: TarotCardT): string =>
    getCardDirectory(card) + getCardFileName(card);
}