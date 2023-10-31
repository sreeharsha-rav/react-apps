import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

import { performSearch, handleSavePlaylist, addTrackToPlaylist, removeTrackFromPlaylist } from './helpers';

import SpotifyAPI from './utils/spotifyAPI';

const App = () => {
  // State Variables
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  // Initialize Spotify API with access token
  useEffect(() => {
    SpotifyAPI.requestAccessToken();
  }, []);

  // Update the playlist name
  const updatePlaylistName = (value) => {
    setPlaylistName(value);
  };

  // Get Search Results
  const getSearchResults = async (searchQuery) => {
    setSearchPerformed(true);
    try {
      await performSearch(SpotifyAPI, searchQuery, setSearchResults);
    } catch (error) {
      alert('Error during search: ' + error);
    }
  }

  // Add a track to the playlist
  const addTrack = (track) => {
    addTrackToPlaylist(track, playlistTracks, setPlaylistTracks);
  };

  // Remove a track from the playlist
  const removeTrack = (track) => {
    removeTrackFromPlaylist(track, setPlaylistTracks);
  };

  // Save the playlist
  const savePlaylist = async () => {
    try {
      await handleSavePlaylist(SpotifyAPI, playlistName, playlistTracks, setPlaylistName, setPlaylistTracks);
    } catch (error) {
      alert('Error saving playlist: ' + error);
    }
  };

  return (
    <div className="bg-neutral-900 min-h-screen">
      <Header />
      <div className="relative m-10">
        <SearchBar 
          getSearchResults={getSearchResults}
        />
      </div>
      <div className="flex mt-10">
        {searchPerformed ? (
          <>
            <div className="w-1/2 p-5">
              <SearchResults 
                results={searchResults}
                onAdd={addTrack}
              />
            </div>
            <div className="w-1/2 p-5">
              <Playlist 
                name={playlistName}
                tracks={playlistTracks}
                onNameChange={updatePlaylistName}
                onRemove={removeTrack}
                onSave={savePlaylist}
              />
            </div>
          </>
        ) : (
          <div className="w-full p-5">
            <h2 className="flex justify-center text-white text-[25px] font-regular font-['Inter']">
              Enter a search term to get started!
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;