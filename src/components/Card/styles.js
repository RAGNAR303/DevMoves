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

  img {
    width: 200px;
    height: 320px;
    border-radius: 20px;
    box-shadow: 0px 0px 15px 0px rgba(130, 130, 130, 0.57);
  }

  h3 {
    color: #ffffff;

    text-align: center;
    margin-top: 5px;
  }
`;
