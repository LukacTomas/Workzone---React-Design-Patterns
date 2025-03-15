import { ChangeEvent, useId, useState } from 'react';
import { useDebounce } from '../../hooks';
import './Search.css';

type SearchProps = {
  placeholder: string;
  label: string;
  onSearch?: (query: string) => void;
}

export function Search({ label, placeholder, onSearch }: SearchProps) {
  const [value, setValue] = useState<string>('');
  const debounceSearch = useDebounce(onSearch ?? console.log, 300);
  const id = useId();

  function onHandleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    debounceSearch(event.target.value);
  }

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} value={value} onChange={onHandleInputChange} type="text" placeholder={placeholder} />
    </>
  );
}