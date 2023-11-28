import React from 'react';
import './SearchInputForm.css';

const SearchInputForm = ({Theme}) => {
  return (
    <div className={`SearchInputFormContainer ${Theme ? 'box-shadow' : ''}`}>
      <input type="text" className="SearchInput" placeholder='Search Books' />
      <button className="SearchButton">Search</button>
    </div>
  )
}

export default SearchInputForm
