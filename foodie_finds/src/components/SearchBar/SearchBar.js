import React, { useState } from 'react';
import styles from './SearchBar.module.css';

// search sorting options
const sortOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

// search container for stateful logic
function SearchBar({searchYelp}) {
    // state variables
    const [ term , setTerm ] = useState('');  // search term
    const [ location, setLocation ] = useState(''); // location
    const [ sortOption, setSortOption ] = useState('best_match'); // sort option

    // get the active sort option
    const getActiveSortClass = (activeSortOption) => {
      if (sortOption === activeSortOption) {
        return styles.active;
      }
      return "";
    };

    // handle sort option selection
    const handleSortOption = (clickedSortOption) => {
      setSortOption(clickedSortOption);
    };

    // handle search term change
    const handleSearchTerm = (event) => {
      setTerm(event.target.value);
    };

    // handle location change
    const handleLocation = (event) => {
      setLocation(event.target.value);
    };

    // handle searching operation
    const handleSearching = (event) => {
      event.preventDefault(); // prevent default clicks
      searchYelp(term, location, sortOption);
    };

    // rendering sort options
    const renderSortOptions = () => {
      return Object.keys(sortOptions).map((sortOptionKey) => {
        let sortOptionValue = sortOptions[sortOptionKey];
        return (
        <li 
          className={getActiveSortClass(sortOptionValue)}
          key={sortOptionValue} 
          onClick={() => {
            handleSortOption(sortOptionValue);
          }}
        >
          {sortOptionKey}
        </li>
        );
      });
    };
  
    return (
      <div className={styles.SearchBar}>
        <div className={styles.SearchBarSortOptions}>
          <ul>{renderSortOptions()}</ul>
        </div>
        <form onSubmit={handleSearching}>
          <div className={styles.SearchBarFields}>
            <input placeholder="Search Businesses" onChange={handleSearchTerm}/>
            <input placeholder="Location" onChange={handleLocation}/>
          </div>
          <div className={styles.SearchBarSubmit}>
            <button type='submit'>Search</button>
          </div>
        </form>
      </div>
    );
}

export default SearchBar;