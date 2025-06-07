import styled, { keyframes } from "styled-components";

const scale = keyframes`

from{
    transform: scale(0);
} to{
    transform: scale(1);
}

`;

export const Background = styled.div`
  background-image: url(${(props) => props.$image});
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.42) 0%,
      rgba(0, 0, 0, 0.73) 80%,
      rgb(0, 0, 0) 100%
    );
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1500px;
  margin-top: -100px;
  position: absolute;
  z-index: 99;

  h1 {
    font-size: 3rem;
    font-weight: 900;
    margin: 20px auto;
    text-shadow: 0px 0px 10px 0px rgba(66, 68, 90, 1);
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
    margin-top: 20px;
    font-size: 1.1rem;
    font-weight: 500;
    color: rgb(210, 210, 210);
    text-shadow: 0px 0px 10px 0px rgba(66, 68, 90, 1);
  }
`;

export const Cover = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  height: 100%;

  img {
    width: 300px;
    border-radius: 20px;
    box-shadow: 0px 0px 30px 0px rgba(130, 130, 130, 0.57);
    animation: ${scale} 0.5s linear;
  }
`;
export const Info = styled.div`
  color: #ffffff;
`;
