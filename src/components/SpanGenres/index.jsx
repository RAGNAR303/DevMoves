import React from "react";
import { Container } from "./styles";

function SpanGenres({ genres, average }) {
  console.log({ genres });
  return (
    <Container>
      {average && <span>{Math.round(average) } / 10 </span>}
      {genres &&
        genres.map((genre) => <span key={genre.id}>{genre.name}</span>)}
    </Container>
  );
}
export default SpanGenres;
