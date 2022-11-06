const url = 'https://shazam.p.rapidapi.com/songs/get-details?key=40333609&locale=en-US';

const fetchSong = async () => {
  return fetch(url, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1b06a6ad4fmshf2d24a9495c2f47p1720d4jsnd1bde9b897b5',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
    },
  })
};

export default fetchSong;
