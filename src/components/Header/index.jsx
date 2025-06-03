import Logo from "../../assets/logo.png";
import React from "react";
import { Container, HeaderLink, LinkContainer,} from "./styles";
import { useNavigate } from "react-router-dom";




function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <img src={Logo} alt="devmoves" />
      <LinkContainer>
        <HeaderLink to={navigate("/")}>Home</HeaderLink>
        <HeaderLink to={navigate("/filmes")}>Filmes</HeaderLink>
        <HeaderLink to={navigate("/series")}>Series</HeaderLink>
      </LinkContainer>
    </Container>
  );
}

export default Header;
