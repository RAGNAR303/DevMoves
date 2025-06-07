import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Background, Container, Cover, Info } from "./styles";
import {
  getMovieCredit,
  getMovieDetail,
  getMovieSimilar,
  getMovieVideos,
} from "../../services/getData";
import { getImages } from "../../utils/getImages";
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";

function Detail() {
  const { id } = useParams();

  const [detail, setMovieDetail] = useState();
  const [movie, setMovie] = useState();
  const [credit, setMovieCredit] = useState();
  const [similar, setMovieSimilar] = useState();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovieDetail(id),
        getMovieVideos(id),
        getMovieCredit(id),
        getMovieSimilar(id),
      ])
        .then(([movie, detail, credits, similar]) => {
          console.log({ movie, detail, credits, similar });
          setMovieDetail(detail);
          setMovie(movie);
          setMovieCredit(credits);
          setMovieSimilar(similar);
        })
        .catch((error) => console.error(error));
    }
    getAllData();
  }, []);

  return (
    <>
      {movie && (
        <>
          <Background $image={getImages(movie.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)} alt="image-poster" />
            </Cover>
            <Info>
              <h1>{movie.title}</h1>
              <h2>{movie.vote_average} /10</h2>
              <SpanGenres genres={movie.genres} />
              <p>{movie.overview}</p>
              <div>
                <Credits credits={credit} />
              </div>
            </Info>
          </Container>
        </>
      )}
    </>
  );
}
export default Detail;
