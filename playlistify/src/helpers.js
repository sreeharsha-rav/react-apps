// helpers.js
//import DemoSearch from './utils/DemoSearch';


// Function to perform search
export async function performSearch(spotify, searchQuery, setSearchResults) {
    //setSearchResults(DemoSearch(searchQuery));
    try {
        const results = await spotify.searchTracks(searchQuery);
        setSearchResults(results);
    } catch (error) {
        throw error;
    }
}

// Function to save the playlist to Spotify
export async function handleSavePlaylist(spotify, playlistName, playlistTracks, setPlaylistName, setPlaylistTracks) {
    if (!playlistName || playlistTracks.length === 0) {
        let message = "Please enter a playlist name and add tracks to the playlist before saving.";
        if (playlistTracks.length === 0) {
        message = "Please add tracks to the playlist before saving.";
        } else if (!playlistName) {
        message = "Please enter a playlist name before saving.";
        }
        alert(message);
        return;
    }

    const trackUris = playlistTracks.map((track) => track.uri);
    try {
        await spotify.savePlaylist(playlistName, trackUris);
        alert(`Playlist ${playlistName} saved successfully!`);
    } catch (error) {
        throw error;
    }

    setPlaylistName("");
    setPlaylistTracks([]);
}

// Function to add a track to the playlist
export function addTrackToPlaylist(track, playlistTracks, setPlaylistTracks) {
    // Check if the track is already in the playlist
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
        return;
    }
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
}

// Function to remove a track from the playlist
export function removeTrackFromPlaylist(track, setPlaylistTracks) {
  setPlaylistTracks((prevTracks) => 
    prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
);
}