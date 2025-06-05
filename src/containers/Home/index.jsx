import React from "react";
import api from "../../services/api";
import { Background, Container, ContainerSlide, Info, Poster } from "./styles";
import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";
import Modal from "../../components/Modal";
function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [popularPeople, setPopularPeople] = useState();
  useEffect(() => {
    async function getMovies() {
      const {
        data: { results },
      } = await api.get("/movie/popular");

      setMovie(results[5]);
    }

    async function getTopMovies() {
      const {
        data: { results },
      } = await api.get("/movie/top_rated");

      setTopMovies(results);
    }

    async function getTopSeries() {
      const {
        data: { results },
      } = await api.get("/tv/top_rated");

      setTopSeries(results);
    }

    async function getPopularSeries() {
      const {
        data: { results },
      } = await api.get("/tv/popular");

      setPopularSeries(results);
    }

    async function getMoviepopular() {
      const {
        data: { results },
      } = await api.get("/movie/popular");

      setPopularMovies(results);
    }
    async function getPopularPeople() {
      const {
        data: { results },
      } = await api.get("/person/popular");

      setPopularPeople(results);
    }

    getMovies();
    getTopMovies();
    getTopSeries();
    getPopularSeries();
    getMoviepopular();
    getPopularPeople();
  }, []);

  return (
    <>
      {movie && (
        <Background $img={getImages(movie.backdrop_path)}>
          {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />  }
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <div>
                <Button red>Assitir Agora</Button>
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
        <h1>Filmes</h1>
        {topMovies && <Slider info={topMovies} title={"Top Filmes"} />}
        {popularMovies && (
          <Slider info={popularMovies} title={"Filmes Populares"} />
        )}
        <h1>Series</h1>
        {topSeries && <Slider info={topSeries} title={"Top Series"} />}
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
