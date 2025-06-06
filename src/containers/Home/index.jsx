import React from "react";

import { Background, Container, ContainerSlide, Info, Poster } from "./styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";
import Modal from "../../components/Modal";
import {
  getMoviePopular,
  getMovies,
  getPopularPeaple,
  getPopularSeries,
  getTopMovies,
  getTopSeries,
} from "../../services/getData";
function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [popularPeople, setPopularPeople] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getMoviePopular(),
        getPopularSeries(),
        getPopularPeaple(),
      ])
        .then(
          ([
            movie,
            topMovies,
            topSeries,
            popularMovies,
            popularSeries,
            popularPeople,
          ]) => {
            setMovie(movie);
            setTopMovies(topMovies);
            setTopSeries(topSeries);
            setPopularMovies(popularMovies);
            setPopularSeries(popularSeries);
            setPopularPeople(popularPeople);
          }
        )
        .catch((error) => console.error(error));
    }
    getAllData();
  }, []);

  return (
    <>
      {movie && (
        <Background $img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <div>
                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>
                  Assitir Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assitir o Trailer
                </Button>
              </div>
            </Info>

            <Poster>
              <img src={getImages(movie.poster_path)} alt={movie.title} />
            </Poster>
          </Container>
        </Background>
      )}
      <ContainerSlide>
        {topMovies && (
          <>
            <h1>Filmes</h1>
            <Slider info={topMovies} title={"Top Filmes"} />{" "}
          </>
        )}
        {popularMovies && (
          <Slider info={popularMovies} title={"Filmes Populares"} />
        )}

        {topSeries && (
          <>
            <h1>Series</h1>
            <Slider info={topSeries} title={"Top Series"} />{" "}
          </>
        )}
        {popularSeries && (
          <Slider info={popularSeries} title={"Series Popular"} />
        )}

        {popularPeople && (
          <Slider info={popularPeople} title={"Artitas Populares"} />
        )}
      </ContainerSlide>
    </>
  );
}

export default Home;
