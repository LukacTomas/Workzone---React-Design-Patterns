import { CharacterResultProps } from '../CharacterResult.tsx';
import { BetterCard } from '../../components';
import './SWCard.css';

export function SWCard({ character }: CharacterResultProps) {
  return (
    <BetterCard className="sw-card">
      <BetterCard.Header className="sw-card-header">
        <h3 className="sw-card-title">{character.fullName}</h3>
      </BetterCard.Header>
      <BetterCard.Content className="sw-card-content">
        <p><strong>About</strong>: {character.about}</p>
        <p><strong>Birthdate</strong>: {character.birthday}</p>
      </BetterCard.Content>
    </BetterCard>
  );
}