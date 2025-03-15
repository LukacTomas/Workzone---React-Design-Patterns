/**
 * useDebounce
 *
 * Custom hook useDebounce that debounce a given callback function.
 * The hook should delay the execution of the callback until a specified delay period has passed since the last call.
 *
 */
import { useCallback, useRef } from 'react';

type Timeout = number;

export const useDebounce = <T extends (...args: any[]) => void>(callback: T, delay: number) => {
  const timeoutRef = useRef<Timeout | null>(null);
  return useCallback((...args: Parameters<T>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
};