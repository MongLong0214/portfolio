import React, { useState } from "react";
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

  const about = props.about;
  const skills = props.skills;
  const projects = props.projects;
  const testimonial = props.testimonial;

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
              // window.scrollTo({ top: 930, behavior: "smooth" });
              about.scrollIntoView({ behavior: "smooth" });
              setIsOpen(!isOpen);
            }}
          >
            About
          </MenuLink>
          <MenuLink
            onClick={() => {
              skills.scrollIntoView({
                behavior: "smooth",
              });
              setIsOpen(!isOpen);
            }}
          >
            Skills
          </MenuLink>
          <MenuLink
            onClick={() => {
              projects.scrollIntoView({ behavior: "smooth" });
              setIsOpen(!isOpen);
            }}
          >
            Projects
          </MenuLink>
          <MenuLink
            onClick={() => {
              testimonial.scrollIntoView({ behavior: "smooth" });
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
