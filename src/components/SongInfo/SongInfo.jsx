import React from 'react';
import './SongInfo.css';

const SongInfo = ({ song = {} }) => {
  return (
  <div className="song">
    <div className="song-image">
      <img src={song?.images?.coverart} />
    </div>
    <div className="song-info">
      <p>{song.title}</p>
      <p>{song.subtitle}</p>
    </div>
  </div>
  );
};

export default SongInfo;