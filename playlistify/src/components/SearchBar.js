import React, {useState} from "react";

const SearchBar = (props) => {
  // State Variables
  const [searchQuery, setSearchQuery] = useState("");

  // Function to update search query variable
  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery) {
      alert("Search query is empty!");
    } else {
      props.getSearchResults(searchQuery); // Call the getSearchResults function from App.js
    }
    setSearchQuery(""); // Reset the search query
  };

  // Function to handle the enter key press
  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md px-4 mx-auto mt-12">
          <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-white left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                  className="w-full py-3 pl-12 pr-4 text-white border rounded-full outline-none bg-neutral-600 focus:border-neutral-400 font-['Inter']" 
                  type="text"
                  placeholder="Search for a song, artist, or album..."
                  value={searchQuery}
                  onChange={handleSearchQuery}
                  onKeyDown={handleEnterKeyPress}
              />
          </div>
      </form>
    </>
  );
};

export default SearchBar;