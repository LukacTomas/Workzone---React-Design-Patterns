import { ICharacterSearch } from './ICharacterSearch.ts';
import { Character } from '../models';

type HPCharacter = {
  index: number;
  fullName: string;
  nickname: string;
  hogwartsHouse: string;
  image: string;
  birthdate: string;
  children: string[];
  interpretedBy: string;
}

export class HPCharacterSearch implements ICharacterSearch {
  private readonly URL = 'https://potterapi-fedeperin.vercel.app/en/characters';

  async searchCharacter(name: string): Promise<Character[]> {
    if (!name) {
      return Promise.reject(new Error('Name is required'));
    }
    const response = await fetch(this.createUrl(name));
    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }
    const characters = await response.json();
    return characters.map((character: HPCharacter) => {
      return Character.deserialize({
        id: String(character.index),
        fullName: character.fullName,
        nickname: character.nickname,
        image: character.image,
        birthday: character.birthdate,
        actor: character.interpretedBy,
        about: `House: ${character.hogwartsHouse}, Children: ${character.children.join(', ')}`,
      });
    });
  }

  private createUrl(name: string): string {
    const searchParams = new URLSearchParams();
    searchParams.append('search', String(name));
    return `${this.URL}?${searchParams.toString()}`;
  }
}