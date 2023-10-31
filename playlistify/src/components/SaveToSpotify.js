import React from 'react';

const SaveToSpotify = (props) => {
    const handleSave = () => {
        // handle save logic here
        props.onSave();
    };

    return (
        <button 
            onClick={handleSave}
            type="button" 
            className="
                text-white border border-green-600 bg-green-600
                font-semibold font-['Inter'] rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 
                hover:bg-green-500 hover:border-green-500 hover:text-white
                active:bg-green-700 active:border-green-700 active:text-white
                "
        >
            Save to Spotify
        </button>
    );
};

export default SaveToSpotify;