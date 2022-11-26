import React, { useEffect, useState, lazy } from 'react';
import fetchSongs from '../../api/fetchSongs';
const Song = lazy(() => import("../Song/Song"));
import './Songs.css';

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {    
    fetchSongs()
      .then((response) => response.json())
      .then((response) => setSongs(response))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false))
    }, []);

  return (
    <>
      {isLoading ? (
      <div>Loading...</div>)
      : (
        <div className="songs">
        {songs.map((song) => (
          <Song key={song.id} song={song} />
        ))}
        </div>
      )}
    </>
  );
};

export default Songs;