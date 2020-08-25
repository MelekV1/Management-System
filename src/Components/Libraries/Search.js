import React from 'react';

const Search = ({ Searcher}) => {
  return (

      <div className='search-container'>
        <input
          type='text'
          placeholder='Type keyword movie to search'
          onChange={(e) => Searcher(e.target.value)}
        />
      </div>

  );
};

export default Search;
