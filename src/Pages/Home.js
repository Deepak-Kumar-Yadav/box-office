import React, { useState } from 'react';
import MainPageLayout from '../Components/MainPageLayout';

export default function Home() {
  const [input, setInput] = useState('');
  const onInputChange = event => {
    setInput(event.target.value);
  };
  const onSearch = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(r => r.json())
      .then(result => console.log(result));
  };
  const onKeyDown = event => {
    if (event.keyCode === 13) {
      onSearch();
    }
  };
  return (
    <MainPageLayout>
      <input
        type="text"
        value={input}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </MainPageLayout>
  );
}
