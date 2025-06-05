import styled from "styled-components";

export const Background = styled.div`
  z-index: 999;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(1px);
`;

export const Container = styled.div`
  background: #000000;
  width: 70%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  padding: 50px;
  max-width: 1100px;
  border-radius: 20px;

  iframe {
    border: none;
    border-radius: 20px;
  }

  button {
    display: flex;
    background: linear-gradient(180deg, rgba(255, 0, 0, 0.9), rgb(107, 0, 0));
    border-radius: 50% 50%;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    color: #fff;
    font-weight: 700;
    border: none;
    font-size: 25px;
    transition: 0.5s ease-in-out;
    padding: 0;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
