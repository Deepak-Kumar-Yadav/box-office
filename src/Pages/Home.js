import React, { useState } from 'react';
import ActorGrid from '../Components/Actor/ActorGrid';
import MainPageLayout from '../Components/MainPageLayout';
import ShowGrid from '../Components/Show/ShowGrid';
import apiGet from '../misc/config';
import { useLastQuery } from '../misc/Custom-hooks';

export default function Home() {
  const [input, setInput] = useLastQuery();
  const [searchResult, setSearchResult] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');
  const onInputChange = event => {
    setInput(event.target.value);
  };
  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then(result =>
      setSearchResult(result)
    );
  };
  const onKeyDown = event => {
    if (event.keyCode === 13) {
      onSearch();
    }
  };
  const renderResult = () => {
    if (searchResult && searchResult.length === 0) {
      return <div>No Result</div>;
    }
    if (searchResult && searchResult.length > 0) {
      return searchResult[0].show ? (
        <ShowGrid data={searchResult} />
      ) : (
        <ActorGrid data={searchResult} />
      );
    }
    return null;
  };
  const onSearchOption = event => {
    setSearchOption(event.target.value);
  };
  return (
    <MainPageLayout>
      <input
        type="text"
        value={input}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
      />
      <div>
        <label htmlFor="showSearch">
          Show{' '}
          <input
            type="radio"
            name="box-office-result"
            id="showSearch"
            value="shows"
            onChange={onSearchOption}
          />
        </label>

        <label htmlFor="actorSearch">
          Actor{' '}
          <input
            type="radio"
            name="box-office-result"
            id="actorSearch"
            value="people"
            onClick={onSearchOption}
          />
        </label>
      </div>
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResult()}
    </MainPageLayout>
  );
}
