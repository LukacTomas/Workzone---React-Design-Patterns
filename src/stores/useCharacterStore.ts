import { useCallback, useState } from 'react';
import { Character } from '../models';
import { characterSearchFactory } from '../api';
import { createStore } from './createStore.ts';

export const useCharacterStore = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchCharacters = useCallback(async (name: string) => {
    if (!name) {
      setError(null);
      setLoading(false);
      setCharacters([]);
      return;
    }
    setLoading(true);
    characterSearchFactory()
      .searchCharacter(name)
      .then((characters) => {
        setCharacters(characters);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    loading,
    error,
    characters,
    searchCharacters,
  };
};

export const useCharacter = createStore<Character, 'characters'>(
  (name) => characterSearchFactory().searchCharacter(name),
  'characters',
);