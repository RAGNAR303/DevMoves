import styled, { keyframes } from "styled-components";

const scale = keyframes`


from{
  transform: scale(0);

}to {
  transform: scale(1);
}


`;

export const Background = styled.div`
  width: 100vw;
  max-width: 100vw;
  overflow: hidden;
  box-sizing: border-box;
  background-image: url(${(props) => props.$img});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 103%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.42) 0%,
      rgba(0, 0, 0, 0.73) 80%,
      rgb(0, 0, 0) 100%
    );
  }
`;

export const Container = styled.div`
  z-index: 2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1100px;
`;
export const Info = styled.div`
  width: 60%;
  padding: 20px;

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
    font-size: 1.1rem;
    font-weight: 500;
    color: rgb(210, 210, 210);
    text-shadow: 0px 0px 10px 0px rgba(66, 68, 90, 1);
  }
  div {
    display: flex;
    margin-top: 15px;
    margin-left: 0;
  }
`;
export const Poster = styled.div`
  img {
    width: 270px;
    border-radius: 20px;
    box-shadow: 0px 0px 30px 0px rgba(130, 130, 130, 0.57);
    animation: ${scale} 0.5s linear;
  }
`;
export const ContainerSlide = styled.div`
  width: 100vw;
  max-width: 100vw;
  margin: 0 20px;
  h1 {
    text-align: center;
    font-size: 3.5rem;
    font-weight: 900;
    margin: 20px auto;
    font-family: "Figtree", sans-serif;
    background: rgb(249, 249, 249);
    background: linear-gradient(
      180deg,
      rgb(255, 0, 0) 0%,
      rgb(135, 0, 0) 50%,
      rgb(67, 0, 0) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
