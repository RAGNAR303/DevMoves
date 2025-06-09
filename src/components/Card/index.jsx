import React, { useState } from "react";
import { getImages } from "../../utils/getImages";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { BiPlayCircle } from "react-icons/bi";

function Card({ item }) {
  const navigate = useNavigate();
  return (
    <Container>
      <img
        src={getImages(item.poster_path || item.profile_path || "")}
        alt="imagen"
      />
      <button onClick={() => navigate(`/detalhe/${item.id}`)}>
        <BiPlayCircle />
      </button>
      <h3>{item.title || item.name || ""}</h3>
    </Container>
  );
}
export default Card;
