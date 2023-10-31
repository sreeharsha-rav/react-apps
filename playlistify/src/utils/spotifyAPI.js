const CLIENT_ID = "YOUR-CLIENT-ID-HERE";
const redirectURI = "http://localhost:3000/";
let accessToken;

// Class for interacting with the Spotify API
const SpotifyAPI = {
    // Function to request access token from Spotify API
    requestAccessToken() {
        // Check if access token exists
        if (accessToken) {
            return accessToken;
        }
        // Get access token from URL
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenMatch && expiresInMatch) {
          accessToken = accessTokenMatch[1];
          const expiresIn = Number(expiresInMatch[1]);
          window.setTimeout(() => accessToken = '', expiresIn * 1000);
          window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
          return accessToken;
        } else {
          const accessUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
          window.location = accessUrl;
        }
    },

    // Function to perform search
    async searchTracks(searchQuery) {
        // get access token
        const accessToken = SpotifyAPI.requestAccessToken();
        // Spotify endpoint to search for tracks
        const searchURL = `https://api.spotify.com/v1/search?q=${searchQuery}&type=track`;
        // Spotify API request options
        const authOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        };

        try {
            // Make request to Spotify API
            const response = await fetch(searchURL, authOptions);
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse.tracks.items;
            } else {
                throw new Error('Request failed! Status: ' + response.status);
            }
        } catch (error) {
            console.log('Error during search: ' + error);
            throw error;
        }
    },

    async savePlaylist(playlistName, trackURIs) {
        // Get access token
        const accessToken = SpotifyAPI.requestAccessToken();

        // Check if access token is available
        if (!accessToken) {
            throw new Error('Access token is missing. Request access token before saving.');
        }
        
        try {
            // Get the current user's ID
            const userResponse = await fetch('https://api.spotify.com/v1/me', {
                method: 'GET',
                headers:  {
                    'Authorization': `Bearer ${accessToken}`,
                }
            });
            const userData = await userResponse.json();
            const userID = userData.id;
            // Check if user ID was retrieved
            if (!userResponse.ok) {
                throw new Error('Failed to get user ID!');
            } 

            // Create a new playlist
            const createPlaylistResponse = await fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: JSON.stringify({ name: playlistName }),
            });
            const playlistData = await createPlaylistResponse.json();
            const playlistID = playlistData.id;
            // Check if playlist ID was retrieved
            if (!createPlaylistResponse.ok) {
                throw new Error('Failed to get playlist ID!');
            } 

            // Add tracks to the playlist
            const addTracksResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: JSON.stringify({ uris: trackURIs }),
            });
            // Check if playlist was created and tracks were added
            if (!addTracksResponse.ok) {
                throw new Error('Request failed! Status: ' + addTracksResponse.status);
            } 
        } catch (error) {
            console.log('Error during saving playlist: ' + error);
            throw error;
        }
    },
};

export default SpotifyAPI;