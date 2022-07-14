import React, { useState } from "react";
import Logo from "../../img/logo.png";

import {
  // MainContainer,
  // LogoContainer,
  LogoImgContainer,
  LogoCopyContainer,
  // NavContainer,
  // HamburgerMenu,
  // NavItem,
  Nav,
  LogoBox,
  Menu,
  Hamburger,
  MenuLink,
} from "./HeaderStyle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Nav>
        <LogoBox>
          <LogoImgContainer src={Logo} />
          <LogoCopyContainer
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Wonil's Portfolio
          </LogoCopyContainer>
        </LogoBox>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLink
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsOpen(!isOpen);
            }}
          >
            Home
          </MenuLink>
          <MenuLink
            onClick={() => {
              window.scrollTo({ top: 910, behavior: "smooth" });
              setIsOpen(!isOpen);
            }}
          >
            About
          </MenuLink>
          <MenuLink
            onClick={() => {
              window.scrollTo({ top: 1940, behavior: "smooth" });
              setIsOpen(!isOpen);
            }}
          >
            Skills
          </MenuLink>
          <MenuLink
            onClick={() => {
              window.scrollTo({ top: 2900, behavior: "smooth" });
              setIsOpen(!isOpen);
            }}
          >
            Projects
          </MenuLink>
          <MenuLink
            onClick={() => {
              window.scrollTo({ top: 3930, behavior: "smooth" });
              setIsOpen(!isOpen);
            }}
          >
            Testimonial
          </MenuLink>
          <MenuLink
            onClick={() => {
              window.scrollTo({ top: 5500, behavior: "smooth" });
              setIsOpen(!isOpen);
            }}
          >
            Contact
          </MenuLink>
        </Menu>
      </Nav>
    </>
  );
};

export default Header;
