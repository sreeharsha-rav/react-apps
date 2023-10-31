import DemoSongData from "../data/DemoSongs";

// Function to get demo song results
const DemoSearch = (query) => {
  const filteredSongs = DemoSongData.filter((song) => {
      return (
      song.name.toLowerCase().includes(query.toLowerCase()) ||
      song.artist.toLowerCase().includes(query.toLowerCase()) ||
      song.album.toLowerCase().includes(query.toLowerCase())
      );
  });

  return (filteredSongs);
};

export default DemoSearch;