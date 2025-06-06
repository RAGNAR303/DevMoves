import api from "./api";

export async function getMovies() {
  const {
    data: { results },
  } = await api.get("/movie/popular");

  return results[3];
}

export async function getTopMovies() {
  const {
    data: { results },
  } = await api.get("/movie/top_rated");

  return results;
}

export async function getTopSeries() {
  const {
    data: { results },
  } = await api.get("/tv/top_rated");
  return results;
}

export async function getPopularSeries() {
  const {
    data: { results },
  } = await api.get("/tv/popular");

  return results;
}

export async function getMoviePopular() {
  const {
    data: { results },
  } = await api.get("/movie/popular");

  return results;
}
export async function getPopularPeaple() {
  const {
    data: { results },
  } = await api.get("/person/popular");

  return results;
}

export async function getMovieVideos(movieId) {
  const {
    data: { results },
  } = await api.get(`/movie/${movieId}/videos`);
  return results;
}

export async function getMovieCredit(movieId) {
  const {
    data: { cast },
  } = await api.get(`/movie/${movieId}/credits`);
  return cast;
}
export async function getMovieSimilar(movieId) {
  const {
    data: { results },
  } = await api.get(`/movie/${movieId}/similar`);
  return results;
}

export async function getMovieDetail(movieId) {
  const { data } = await api.get(`/movie/${movieId}`);
  return data;
}

// export async function getMovieReviews(movieId) {
//   const {
//     data: { results },
//   } = await api.get(`/movie/${movieId}/reviews`);
//   return results[0];
// }
