import React, { useState } from "react";
import Logo from "../../img/logo.png";

import {
  MainContainer,
  LogoContainer,
  LogoImgContainer,
  LogoCopyContainer,
  NavContainer,
  HamburgerMenu,
  NavItem,
} from "./HeaderStyle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MainContainer>
        <LogoContainer>
          <LogoImgContainer src={Logo} />
          <LogoCopyContainer
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Wonil's Portfolio
          </LogoCopyContainer>
        </LogoContainer>

        <NavContainer isOpen={isOpen}>
          <NavItem
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Home
          </NavItem>
          <NavItem
            onClick={() => {
              window.scrollTo({ top: 900, behavior: "smooth" });
            }}
          >
            About
          </NavItem>
          <NavItem
            onClick={() => {
              window.scrollTo({ top: 1920, behavior: "smooth" });
            }}
          >
            Skills
          </NavItem>
          <NavItem
            onClick={() => {
              window.scrollTo({ top: 2890, behavior: "smooth" });
            }}
          >
            Projects
          </NavItem>
          <NavItem
            onClick={() => {
              window.scrollTo({ top: 3930, behavior: "smooth" });
            }}
          >
            Testimonial
          </NavItem>
          <NavItem
            onClick={() => {
              window.scrollTo({ top: 5500, behavior: "smooth" });
            }}
          >
            Contact
          </NavItem>
        </NavContainer>
        <HamburgerMenu onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
          <span />
          <span />
          <span />
        </HamburgerMenu>
      </MainContainer>
    </>
  );
};

export default Header;
