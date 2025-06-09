import styled from "styled-components";

export const Background = styled.div`
  background-image: url(${(props) => props.$img});
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
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
      rgba(0, 0, 0, 0.68) 60%,
      rgb(0, 0, 0) 100%
    );
  }
`;

export const Container = styled.div`
  color: #ffffff;
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

export const ContainerSlide = styled.div`
  position: relative;
  z-index: 40;
  margin-top: -300px;
`;
