import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: oklch(14.1% 0.005 285.823);
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  
  padding: 10px;
  img {
    width: 270px;
    height: 50px;
  }
`;

export const LinkContainer = styled.div`
  padding: 10px;
`;

export const HeaderLink = styled(Link)`
color: oklch(70.8% 0 0);
font-size: 25px;
margin: 0 10px;
`;
