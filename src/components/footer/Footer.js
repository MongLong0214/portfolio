import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FooterMainContainer,
  FooterContactText,
  FooterEMail,
  FooterGitBox,
  FooterGit,
  FooterSubCopy,
} from "./FooterStyle";

import Git2 from "../../img/git2.png";

const Footer = () => {
  return (
    <>
      <FooterMainContainer>
        <FooterContactText>Contact Me</FooterContactText>
        <FooterEMail
          onClick={() => {
            navigator.clipboard.writeText("weplay0628@gmail.com");
            toast.dark("E-mail copied to clipboard!");
          }}
        >
          weplay0628@gmail.com
        </FooterEMail>
        <ToastContainer />
        <FooterGitBox href="https://github.com/MongLong0214" target="_blank">
          <FooterGit src={Git2} />
        </FooterGitBox>
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
