import React from "react";

const Track = (props) => {

  // Function to handle adding a track to the playlist
  const handleAdd = () => {
    props.onAdd(props.track);
  };

  // Function to handle removing a track from the playlist
  const handleRemove = () => {
    props.onRemove(props.track);
  };

  // Function to render the add or remove button
  const renderButtonAction = () => {
    if (props.isAdd) {
      return (
        <button
          onClick={handleAdd}
          className={`bg-transparent text-gray-300 hover:text-gray-400 active:text-gray-600`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clipRule="evenodd" />
          </svg>
        </button>
      );
    } else {
      return (
        <button
          onClick={handleRemove}
          className={`bg-transparent text-gray-300 hover:text-gray-400 active:text-gray-600`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clipRule="evenodd" />
          </svg>
        </button>
      );
    }
  };

  return (
    <>
      <div className="flex justify-between items-center font-['Inter']">
        <div>
          <h3 className="text-md text-white font-regular">{props.track.name}</h3>
          <p className="text-xs text-gray-300 font-light">{props.track.artists[0].name} | {props.track.album.name}</p>
        </div>
        {renderButtonAction()}
      </div>
    </>
  );
};

export default Track;