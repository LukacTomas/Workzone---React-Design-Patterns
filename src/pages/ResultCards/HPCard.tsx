import { BetterCard } from '../../components';
import { CharacterResultProps } from '../CharacterResult.tsx';
import './HPCard.css';

export function HPCard({ character }: CharacterResultProps) {
  return (
    <BetterCard className="hp-card">
      <BetterCard.Image src={character.image} alt={character.fullName} className="hp-card-image" />
      <div className="section">
        <BetterCard.Header className="hp-card-header">
          <h3 className="hp-card-title">{character.fullName}</h3>
          <h2>{character.nickname}</h2>
        </BetterCard.Header>
        <BetterCard.Content className="hp-card-content">
          <p><strong>About {character.nickname}</strong>: {character.about}</p>
          <p><strong>Actor</strong>: {character.actor}</p>
        </BetterCard.Content>
      </div>
    </BetterCard>
  );
}