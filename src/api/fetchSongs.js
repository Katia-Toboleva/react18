// const url = 'https://shazam.p.rapidapi.com/songs/get-details?key=40333609&locale=en-US';

// const fetchSong = async () => {
//   return fetch(url, {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '4b33b276dcmsh35fc9122f9a82c5p12021fjsn775d3ff8a18f',
//       'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
//     }
//   })
// };

const fetchSongs = async () => fetch('https://jsonplaceholder.typicode.com/photos');

export default fetchSongs;
