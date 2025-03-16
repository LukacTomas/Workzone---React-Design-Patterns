import { useCallback, useState } from 'react';

export const createStore = <T, K extends string>(
  searchFunction: (query: string) => Promise<T[]>,
  key: K,
) => {
  return () => {
    const [items, setItems] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const search = useCallback((query: string) => {
      if (!query) {
        setError(null);
        setLoading(false);
        setItems([]);
        return;
      }

      setLoading(true);
      searchFunction(query)
        .then(setItems)
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, []);

    return {
      loading,
      error,
      [key]: items,
      [`search${key.charAt(0).toUpperCase() + key.slice(1)}`]: search,
    } as {
      loading: boolean;
      error: string | null;
    } & { [P in K]: T[] } & { [P in `search${Capitalize<K>}`]: (query: string) => void };
  };
};





