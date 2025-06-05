import styled from "styled-components";

export const Container = styled.div`
 overflow-x: hidden;
  h2 {
    color: #ffffff;
    font-family: "Figtree", sans-serif;
    text-align: center;
    margin: 20px;
    font-size: 40px;
  }

  h2::after {
    content: "";
    border-top: 2px solid rgb(172, 1, 1);
  }

  .swiper-wrapper {
    display: flex;
  }
`;
