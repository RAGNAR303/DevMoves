import Logo from "../../assets/logo.png";
import React, { useState } from "react";
import { Container, Li, Menu } from "./styles";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();
  const [chageBackground, setChangeBackground] = useState(false);

  window.onscroll = () => {
    if (!chageBackground && window.pageYOffset > 70) {
      setChangeBackground(true);
    }
    if (chageBackground && window.pageYOffset <= 70) {
      setChangeBackground(false);
    }
  };
  return (
    <Container $chageBackground={chageBackground}>
      <img src={Logo} alt="lego-devmoves" />
      <Menu>
        <Li $isActive={pathname === "/"}>
          <Link to="/">Home</Link>
        </Li>
        <Li $isActive={pathname.includes("filmes")}>
          <Link to="/filmes">Filmes</Link>
        </Li>
        <Li $isActive={pathname.includes("series")}>
          <Link to="/series">Series</Link>
        </Li>
      </Menu>
    </Container>
  );
}

export default Header;
