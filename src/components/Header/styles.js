import styled from "styled-components";

export const Container = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  width: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.73) 70%,
      rgb(0, 0, 0) 100%
    );
  padding: 10px;
  transition: background-color 0.5s ease-in-out;
  backdrop-filter: ${(props) =>
    props.$chageBackground ? "blur(10px)" : "none"};
  img {
    width: 25%;
  }
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
`;

export const Li = styled.li`
  cursor: pointer;
  position: relative;

  a {
    color: rgba(255, 255, 255, 0.8);
    font-size: 25px;
    margin: 0 10px;
    font-family: "Figtree", sans-serif;
    font-weight: 900;
  }

  &::after {
    content: "";
    height: 3px;
    width: ${(props) => (props.$isActive ? "100%" : 0)};
    background-color: rgb(172, 0, 0);
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover {
    background: linear-gradient(180deg, rgba(255, 0, 0, 0.9), rgb(107, 0, 0));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;
