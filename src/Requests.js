// Will be stored in process.env.API_KEY 
const API_KEY = "41ff99479e209bd711014c79a33de412"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en—US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en—US`,
    fetchActionMovirs: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`, 
}

export default requests

// https://api.themoviedb.org/3//trending/all/week?api_key=41ff99479e209bd711014c79a33de412&language=en—US