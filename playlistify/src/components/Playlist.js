import React from "react";

import Tracklist from "./Tracklist";
import SaveToSpotify from "./SaveToSpotify";

const Playlist = (props) => {
    // Function to update playlist name variable
    const handlePlaylistName = (e) => {
        props.onNameChange(e.target.value);
    };

    return (
        <div className="relative p-5 bg-neutral-800 rounded-[15px]">
            <label
            for="PlaylistName"
            class="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-gray-400"
            >

            <input
                type="text"
                id="PlaylistName"
                placeholder="Playlist Name"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-white font-medium text-2xl font-['Inter']"
                value={props.name}
                onChange={handlePlaylistName}
            />

            <span
                class="absolute start-0 top-2 -translate-y-1/2 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs font-light font-['Inter']"
            >
                Playlist Name
            </span>
            </label>
            <div>
                {props.tracks.length === 0 ? (
                    <h3 className="my-2 py-5 text-gray-300 text-center font-light font-['Inter']">add songs here...</h3>
                ) : (
                    <Tracklist 
                        tracks={props.tracks} 
                        isAdd={false}
                        onRemove={props.onRemove}
                    />
                )}
            </div>
            <div className="flex justify-center">
                <SaveToSpotify onSave={props.onSave}/>
            </div>
        </div>
    );
};

export default Playlist;