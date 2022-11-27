import React, { useEffect, useState, lazy, Suspense } from 'react';
import fetchSongs from '../../api/fetchSongs';
const Song = lazy(() => import("../Song/Song"));
import './Songs.css';

const Songs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {    
    fetchSongs()
      .then((response) => response.json())
      .then((response) => setSongs(response))
      .catch((err) => console.error(err))
    }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="songs">
      {songs.map((song) => (
        <Song key={song.id} song={song} />
      ))}
      </div>
    </Suspense>
  );
};

export default Songs;