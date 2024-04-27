const apiKey = '7f49aaa40878f0da23c1c4e13c41c2ef'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`,
    requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
  };

  export default requests