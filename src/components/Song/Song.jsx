import React from 'react';
import './Song.css';

const Song = ({ song = {} }) => {
  return (
  <div className="song">
    <div className="song-image">
      <img src={song?.thumbnailUrl} />
    </div>
    <div className="song-info">
      <p>{song.title}</p>
      <a>{song.url}</a>
    </div>
  </div>
  );
};

export default Song;