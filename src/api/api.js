const API_KEY = "7c51ce5f51b2a0e2bb3bf45b2afaa9ae";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

// Récupérer les films tendances
export const getTrendingMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=fr-FR`
  );
  const data = await response.json();
  return data.results;
};

// Récupérer les séries populaires
export const getPopularSeries = async () => {
  const response = await fetch(
    `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=fr-FR`
  );
  const data = await response.json();
  return data.results;
};

// Récupérer les détails d'un film
export const getMovieDetails = async (id) => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=fr-FR`
  );
  const data = await response.json();
  return data;
};

// Récupérer les détails d'une série
export const getSeriesDetails = async (id) => {
  const response = await fetch(
    `${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=fr-FR`
  );
  const data = await response.json();
  return data;
};

// Récupérer le casting d'un film
export const getMovieCredits = async (id) => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=fr-FR`
  );
  const data = await response.json();
  return data.cast.slice(0, 4);
};

// Récupérer le casting d'une série
export const getSeriesCredits = async (id) => {
  const response = await fetch(
    `${BASE_URL}/tv/${id}/credits?api_key=${API_KEY}&language=fr-FR`
  );
  const data = await response.json();
  return data.cast.slice(0, 4);
};

// URL de l'image
export const getImageUrl = (path) => {
  return path ? `${IMAGE_BASE_URL}${path}` : "";
};

// URL de l'image backdrop
export const getBackdropUrl = (path) => {
  return path
    ? `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${path}`
    : "";
};
