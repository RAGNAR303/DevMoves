import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  background: transparent;
  padding: 5px;
  height: 400px;
  border-radius: 20px;
  backdrop-filter: blur(70px);
  transition: 0.5s ease-in-out;
  img {
    width: 200px;
    height: 320px;
    border-radius: 20px;
    box-shadow: 0px 0px 15px 0px rgba(130, 130, 130, 0.57);
  }

  h3 {
    color: rgb(193, 193, 193);

    text-align: center;
    margin-top: 5px;
  }

  &:hover {
    transform: scale(1.01);
    background: rgba(41, 41, 41, 0.52);
    box-shadow: 0px 0px 15px 0px rgba(130, 130, 130, 0.57);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    z-index: 2;
    position: absolute;
    transition: 0.5s ease-in-out;
    border-radius: 20px;
    top: 0;
    svg {
      fill: none;
      font-size: 50px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        fill: rgba(255, 255, 255, 0.52);
      }
    }

    &:hover {
      background: rgba(0, 0, 0, 0.36);
    }
  }
`;
