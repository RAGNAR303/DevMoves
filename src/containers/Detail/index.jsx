import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./styles";
import {
  getMovieCredit,
  getMovieDetail,
  getMovieSimilar,
  getMovieVideos,
} from "../../services/getData";

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
    <Container>
      <div>Detalhes</div>
    </Container>
  );
}
export default Detail;
