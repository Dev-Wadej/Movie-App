import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

// api = https://api.themoviedb.org/3/trending/all/day?api_key=fe6cb1329b44f880b214a4f880fb4a76
//api https://api.themoviedb.org/3/discover/movie?api_key=fe6cb1329b44f880b214a4f880fb4a76

// search/${type ? "tv" : "movie"}?api_key=${
//     process.env.REACT_APP_API_KEY
//   }&language=en-US&query=${searchText}&page=${page}&include_adult=false