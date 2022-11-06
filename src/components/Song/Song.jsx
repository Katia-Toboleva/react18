import React, { useEffect, useState } from 'react';
import fetchSong from '../../api/fetchSong';
import SongInfo from "../SongInfo/SongInfo";

const Song = () => {
  const [song, setSong] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {    
    fetchSong()
      .then((response) => response.json())
      .then((response) => setSong(response))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false))
    }, []);

  return (
    <>
    {isLoading ? (
      <div>Loading...</div>
    ) : (      
      <SongInfo song={song} />
    )
    }
    </>
  );
};

export default Song;