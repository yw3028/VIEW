const BASE_URL = 'https://movied.herokuapp.com';

export default {
  getExploreMovies: () => fetchRequest(`discover`),
  getCategories: () => fetchRequest(`categories`),
  getMoviesFromCategory: (id) => fetchRequest(`categories/${id}`),
  getMovieById: (id) => fetchRequest(`/movie/${id}`),
  // For the searchBar
  getMovieByTitle: (title) => fetchRequest(`/search?q=${title}`),
};

const fetchRequest = (url) => {
  return fetch(`${BASE_URL}/${url}`)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((error) => {
      console.log(`${error.message} while fetching /${url}`);
    });
};
