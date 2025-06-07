/* eslint-disable react/prop-types */
import React from "react";
import { Container } from "./styles";
import { getVideo } from "../../utils/getVideos";

function Videos({ videos }) {
  return (
    <Container>
      {videos &&
        videos
          .slice(0, 3)
          .map((movie) => (
            <iframe
              height="500px"
              width="800px"
              key={movie.id}
              src={getVideo(movie.key)}
            ></iframe>
          ))}
    </Container>
  );
}
export default Videos;
