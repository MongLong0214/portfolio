import React from "react";

import {
  FooterMainContainer,
  FooterContactText,
  FooterEMail,
  FooterGit,
  FooterSubCopy,
} from "./FooterStyle";

import Git2 from "../../img/git2.png";

const Footer = () => {
  return (
    <>
      <FooterMainContainer>
        <FooterContactText>Contact Me</FooterContactText>
        <FooterEMail>weplay0628@gmail.com</FooterEMail>
        <FooterGit src={Git2} />
        <FooterSubCopy>
          {" "}
          &copy;{new Date().getFullYear()} Wonil's Portfolio | All rights
          reserved | Terms Of Service | Privacy
        </FooterSubCopy>
      </FooterMainContainer>
    </>
  );
};

export default Footer;
