import { Character } from '../models';
import { config } from '../config/config.ts';
import { HPCard, SWCard } from './ResultCards';
import { Card } from '../components';

export type CharacterResultProps = {
  character: Character;
}
export const CharacterResult = ({ character }: CharacterResultProps) => {
  if (config.api === 'HP') {
    return <HPCard character={character} />;
  }

  if (config.api === 'SW') {
    return <SWCard character={character} />;
  }

  console.error('Unknown API:', config.api);

  return <Card title={character.fullName} subtitle={character.nickname} image={character.image}
               description={character.about} />;
};
