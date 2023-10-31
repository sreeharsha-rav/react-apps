import React, { useState } from 'react';
import styles from "./App.module.css";

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import getYelpRequest from '../../utils/yelpAPI';

function App() {
  // state variables for business arrays
  const [businesses, setBusinesses] = useState([]);

  // searching on yelp API
  const searchYelp = async (term, location, sortOption) => {
    //console.log(`Search Yelp with ${term}, ${location}, ${sortOption}`);
    const restaurants = await getYelpRequest(term, location, sortOption);
    //console.log(`Yelp Result: ${restaurants}`);
    
    setBusinesses(restaurants); // update state
  };

  return (
    <div className={styles.App}>
      <h1>FoodieFinds</h1>
      <SearchBar searchYelp={searchYelp}/>
      <BusinessList businesses={businesses}/>
    </div>
  );
}

export default App;
