import styled from "styled-components";
import headerImg from "../../img/headerIMG.jpg";

export const FooterMainContainer = styled.section`
  width: 100%;
  /* height: 25vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-image: url(${headerImg});
  background-repeat: no-repeat;
  background-size: cover;

  font-family: "Poppins", sans-serif;
`;

export const FooterContactText = styled.div`
  margin-top: 1rem;
  font-size: 4rem;
  font-weight: bold;
  color: white;
  @media screen and (max-width: 1150px) {
    font-size: 2.4rem;
  }
`;

export const FooterEMail = styled.div`
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
  @media screen and (max-width: 1150px) {
    font-size: 1rem;
  }
`;

export const FooterGitBox = styled.a`
  margin-top: 2rem;
  width: 4.5rem;
  height: 4.5rem;
  @media screen and (max-width: 1150px) {
    width: 3rem;
    height: 3rem;
    margin-top: 1rem;
  }
`;
export const FooterGit = styled.img`
  width: 4.2rem;
  height: 4.2rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
  @media screen and (max-width: 1150px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const FooterSubCopy = styled.div`
  margin-top: 2rem;
  font-size: 1rem;
  /* font-weight: bold; */
  color: white;
  margin-bottom: 1rem;
  @media screen and (max-width: 1150px) {
    font-size: 0.4rem;
    margin-top: 1rem;
  }
`;
