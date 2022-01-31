import { useState } from 'react';
import Wrapper from './Wrapper';

const entries = ['Apple', 'Banana', 'Grape', 'Orange', 'Strawberry'];

export default function Search() {
  const [query, setQuery] = useState('');

  return (
    <Wrapper>
      <div>
        <input
          onInput={({ target }) => setQuery(target.value)}
          className="p-2 rounded border border-gray-400 dark:border-gray-600 dark:bg-black"
        />
        <ul>
          {entries
            .filter((entry) => entry.toLowerCase().includes(query))
            .map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
        </ul>
      </div>
    </Wrapper>
  );
}
