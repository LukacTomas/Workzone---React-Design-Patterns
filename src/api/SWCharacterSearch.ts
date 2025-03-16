import { ICharacterSearch } from './ICharacterSearch.ts';
import { Character } from '../models';

export interface SWCharacter {
  count: number;
  next: any;
  previous: any;
  results: Result[];
}

export interface Result {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: any[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export class SWCharacterSearch implements ICharacterSearch {
  private readonly URL = 'https://swapi.dev/api/people';

  async searchCharacter(name: string): Promise<Character[]> {
    if (!name) {
      return Promise.reject(new Error('Name is required'));
    }
    const response = await fetch(this.createUrl(name));
    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }
    const characters: SWCharacter = await response.json();
    return characters.results.map((character: Result) => {
      return Character.deserialize({
        id: character.url,
        fullName: character.name,
        nickname: '',
        image: '',
        birthday: character.birth_year,
        actor: '',
        about: `Height: ${character.height}, Mass: ${character.mass}, Hair Color: ${character.hair_color}`,
      });
    });
  }


  createUrl(name: string): string {
    const searchParams = new URLSearchParams();
    searchParams.append('search', String(name));
    return `${this.URL}?${searchParams.toString()}`;
  }
}