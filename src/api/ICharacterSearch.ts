import { Character } from '../models';

export interface ICharacterSearch {
  searchCharacter: (name: string) => Promise<Character[]>;
}