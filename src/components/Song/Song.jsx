import React, { useEffect, useState, Suspense, lazy } from 'react';
import fetchSong from '../../api/fetchSong';
const SongInfo = lazy(() => import("../SongInfo/SongInfo"));
import './Song.css';

const Song = () => {
  const [song, setSong] = useState();

  useEffect(() => {    
    fetchSong()
      .then((response) => response.json())
      .then((response) => setSong(response))
      .catch((err) => console.error(err))
    }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SongInfo song={song} />
    </Suspense>
  );
};

export default Song;