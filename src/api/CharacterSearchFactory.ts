import { ICharacterSearch } from './ICharacterSearch.ts';
import { SWCharacterSearch } from './SWCharacterSearch.ts';
import { config } from '../config/config.ts';
import { HPCharacterSearch } from './HPCharacterSearch.ts';

export const characterSearchFactory = (): ICharacterSearch => {
  if (config.api === 'HP') {
    return new HPCharacterSearch();
  }

  return new SWCharacterSearch();
};