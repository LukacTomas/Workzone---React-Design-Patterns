import './App.css';
import { Search } from './components';
import { Layout } from './Layout/Layout.tsx';
import { useCharacter } from './stores';
import { useCallback } from 'react';
import { config } from './config/config.ts';
import { Card } from './components/Card/Card.tsx';

function App() {
  const { loading, error, characters, searchCharacters } = useCharacter();

  console.log({
    loading,
    error,
    characters,
  });

  const onMovieSearch = useCallback((query: string) => {
    searchCharacters(query);
  }, [searchCharacters]);

  return (
    <Layout>
      <Search placeholder={`Search ${config.name} character`} label="Search" onSearch={onMovieSearch} />
      {
        loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="card-wrapper">
            {characters.map((character) => (
              <Card key={character.id} title={character.fullName} subtitle={character.nickname}
                    description={character.about} image={character.image} />
            ))}
          </div>
        )
      }
    </Layout>
  );
}

export default App;
