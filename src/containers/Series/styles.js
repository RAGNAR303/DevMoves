import styled from "styled-components";

export const Container = styled.div``;

export const Backgraund = styled.div`
  background-image: url(${(props) => props.$img});
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  max-width: 100vw;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.68) 80%,
      #000000 100%
    );
  }
`;
export const Info = styled.div`
  margin-top: -400px;
  margin-bottom: 300px;
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 50px;

  h1 {
    font-size: 3rem;
    font-weight: 900;
    margin: 20px auto;
    text-align: center;
    font-family: "Figtree", sans-serif;
    background: rgb(249, 249, 249);
    background: linear-gradient(
      180deg,
      rgb(255, 255, 255) 0%,
      rgb(169, 169, 169) 50%,
      rgb(106, 106, 106) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    font-size: 1.1rem;
    font-weight: 500;
    color: rgb(210, 210, 210);
  }
`;

export const ContainerSlider = styled.div`
  position: relative;
  z-index: 40;
  margin-top: -300px;
`;
