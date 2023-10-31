import React from "react";
import Tracklist from "./Tracklist";

const SearchResults = (props) => {
  return (
    <div className="relative p-5 bg-neutral-800 rounded-[15px]">
      <h2 className="text-white text-[25px] font-bold font-['Inter']">
        Search Results
      </h2>
      {props.results.length > 0 ? (
        <Tracklist 
          tracks={props.results} 
          onAdd={props.onAdd}
          isAdd={true}
        />
      ) : (
        <p className="relative py-5 text-white font-light font-['Inter']">Your search yielded no matches</p>
      )}
    </div>
  );
};

export default SearchResults;