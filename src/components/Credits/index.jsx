/* eslint-disable react/prop-types */
import React from "react";
import { Container, Title } from "./styles";
import { getImages } from "../../utils/getImages";

function Credits({ credits }) {
  return (
    <>
      <Title>Creditos</Title>
      {credits && (
        <Container>
          {credits.slice(0, 5).map((artist) => (
            <div key={artist.id}>
              <img src={getImages(artist.profile_path)} alt="imagen-artitas" />
              <p>{artist.name}</p>
            </div>
          ))}
        </Container>
      )}
    </>
  );
}
export default Credits;
