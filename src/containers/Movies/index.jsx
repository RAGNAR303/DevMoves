import React, { useEffect, useState } from "react";
import { Background, Container, ContainerSlide, Info } from "./styles";
import {
  getMoviePopular,
  getMovies,
  getNowPlaying,
  getTopMovies,
  getUpComing,
} from "../../services/getData";
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";
import SpanGenres from "../../components/SpanGenres";
import Modal from "../../components/Modal";

function Movies() {
  const [showModal, setShowModal] = useState();
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovie] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [nowPlaying, setNowPlaying] = useState();
  const [upComing, setUpComing] = useState();
  console.log({ showModal });
  useEffect(() => {
    async function allMovies() {
      Promise.all([
        getMovies(),
        getMoviePopular(),
        getTopMovies(),
        getNowPlaying(),
        getUpComing(),
      ])
        .then(([movie, topMovies, popularMovies, nowPlaying, upComing]) => [
          setMovie(movie[4]),
          setTopMovie(topMovies),
          setPopularMovies(popularMovies),
          setNowPlaying(nowPlaying),
          setUpComing(upComing),
        ])
        .catch((error) => console.error(error));
    }

   allMovies();
  }, []);

  return (
    <Container>
      {movie && <Background $img={getImages(movie.backdrop_path)} />}
      {movie && (
        <Info>
          <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
          </div>
          {/* <SpanGenres average={movie.vote_average} genres={movie.genres} /> */}
          {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}
        </Info>
      )}

      <h1>Filmes</h1>
      <ContainerSlide>
        {topMovies && <Slider info={topMovies} title={"Top Filmes"} />}
        {popularMovies && (
          <Slider info={popularMovies} title={"Filmes Populares"} />
        )}
        {nowPlaying && <Slider info={nowPlaying} title={"Assita Agora"} />}
        {upComing && <Slider info={upComing} title={"Em Lançamento"} />}
      </ContainerSlide>
    </Container>
  );
}

export default Movies;
