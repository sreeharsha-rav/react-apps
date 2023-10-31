import React from "react";
import Track from "./Track";

const Tracklist = (props) => {

  return (
    <div className="relative py-5 text-white font-light font-['Inter']">
      {props.tracks.map((track, id) => (
        <div key={id}>
          <Track
            key={track.uri}
            track={track}
            isAdd={props.isAdd}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
          />
          <hr className="my-2 border-t border-gray-500" />
        </div>
      ))}
    </div>
  );
};

export default Tracklist;