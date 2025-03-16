import { Search } from '../components';
import { config } from '../config/config.ts';
import { useCharacter } from '../stores';
import { useCallback } from 'react';
import { Character } from '../models';
import { CharacterResult } from './CharacterResult.tsx';

export const Main = () => {
  const { loading, error, characters, searchCharacters } = useCharacter();

  const onMovieSearch = useCallback((query: string) => {
    searchCharacters(query);
  }, [searchCharacters]);

  return (
    <>
      <Search placeholder={`Search ${config.name} character`} label="Search" onSearch={onMovieSearch} />
      <SearchResults loading={loading} error={error} characters={characters} />
    </>
  );
};
type SearchResultsProps = {
  loading: boolean;
  error: string | null;
  characters: Character[];
}

function SearchResults({ loading, error, characters }: SearchResultsProps) {
  return (
    <>
      {
        loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="card-wrapper">
            {characters.map((character) => (
              <CharacterResult key={character.id} character={character} />
            ))}
          </div>
        )
      }
    </>
  );
}