/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Background, Container } from "./styles";
import { getMovieVideos } from "../../services/getData";
import { getVideo } from "../../utils/getVideos";

function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState();
console.log({movie})
  useEffect(() => {
    async function getMovies() {
      setMovie(await getMovieVideos(movieId));
    }

    getMovies();
  }, []);

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <iframe
            src={getVideo(movie[0].key)}
            title="Youtube video play"
            height="350px"
            width="100%"
          ></iframe>
          <button onClick={() => setShowModal(false)}>x</button>
        </Container>
      )}
    </Background>
  );
}
export default Modal;

// https://api.themoviedb.org /3/movie/ {movie_id} /vídeos
