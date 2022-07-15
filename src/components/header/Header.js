import React, { useState, useEffect } from "react";
import Logo from "../../img/logo.png";

import {
  LogoImgContainer,
  LogoCopyContainer,
  Nav,
  LogoBox,
  Menu,
  Hamburger,
  MenuLink,
} from "./HeaderStyle";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navHeight, setNavHeight] = useState("");

  const about = props.about;
  const skills = props.skills;
  const projects = props.projects;
  const testimonial = props.testimonial;

  useEffect(() => {
    const navHeight = document.querySelector("#nav").offsetHeight;
    setNavHeight(navHeight);
  }, []);
  console.log("Nav Height: ", about - navHeight);

  return (
    <>
      <Nav id="nav">
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
              window.scrollTo({ top: about - navHeight, behavior: "smooth" });
              setIsOpen(!isOpen);
            }}
          >
            About
          </MenuLink>
          <MenuLink
            onClick={() => {
              window.scrollTo({ top: skills - navHeight, behavior: "smooth" });
              setIsOpen(!isOpen);
            }}
          >
            Skills
          </MenuLink>
          <MenuLink
            onClick={() => {
              window.scrollTo({
                top: projects - navHeight,
                behavior: "smooth",
              });
              setIsOpen(!isOpen);
            }}
          >
            Projects
          </MenuLink>
          <MenuLink
            onClick={() => {
              window.scrollTo({
                top: testimonial + 80,
                behavior: "smooth",
              });
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
