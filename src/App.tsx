import './App.css';
import { Search } from './components';
import { Layout } from './Layout/Layout.tsx';
import { useCharacter } from './stores';
import { useCallback } from 'react';
import { config } from './config/config.ts';

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
    </Layout>
  );
}

export default App;
