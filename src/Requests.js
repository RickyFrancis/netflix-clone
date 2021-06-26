// Will be stored in process.env.API_KEY
const API_KEY = "41ff99479e209bd711014c79a33de412";

const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en—US`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=41ff99479e209bd711014c79a33de412&with_networks=213&language=en%E2%80%94US`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en—US`,
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;

// https://api.themoviedb.org/3//trending/all/week?api_key=41ff99479e209bd711014c79a33de412&language=en—US
// https://api.themoviedb.org/3/discover/tv?api_key=41ff99479e209bd711014c79a33de412&with_networks=213&language=en—US
