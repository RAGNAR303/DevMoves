import styled, { css } from "styled-components";

const buttonStyles = css`
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 30px;
  border: 2px solid #ffffff;
  color: #ffffff;
  margin: 10px;
  background: rgba(255, 255, 255, 0.13);
  font-weight: 700;
  transition: 0.4s ease-in-out;
  cursor: pointer;
  &:hover {
    background: #ffffff;
    color: rgb(255, 2, 2);
  }
`;

export const ButtonWhite = styled.button`
  ${buttonStyles}
`;

export const ButtonRed = styled.button`
  ${buttonStyles}

  background:rgba(153, 1, 1, 1) 60%;
  box-shadow: 0px 0px 10px 8px rgba(153, 1, 1, 0.59);
  border: 2px solid rgb(153, 2, 2);

  &:hover {
    border: 2px solid rgb(201, 0, 0);
    box-shadow: 0px 0px 15px 8px rgba(255, 2, 2, 0.67);
    background: rgb(201, 0, 0);
    color: #ffffff;
  }
`;


 