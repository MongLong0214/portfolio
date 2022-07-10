import React, { useEffect, useState, useRef } from "react";
import Logo from "../../img/logo.png";

import {
  MainContainer,
  LogoContainer,
  LogoImgContainer,
  LogoCopyContainer,
  NavContainer,
  NavItem,
} from "./HeaderStyle";

const Header = () => {
  return (
    <>
      <MainContainer>
        <LogoContainer>
          <LogoImgContainer src={Logo} />
          <LogoCopyContainer>Wonil's Portfolio</LogoCopyContainer>
        </LogoContainer>
        <NavContainer>
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Skills</NavItem>
          <NavItem>Projects</NavItem>
          <NavItem>Testimonial</NavItem>
          <NavItem>Contact</NavItem>
        </NavContainer>
      </MainContainer>
    </>
  );
};

export default Header;
