import styled from "styled-components";
import headerImg from "../../img/headerIMG.jpg";

export const LogoImgContainer = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  margin-right: 1rem;
  /* padding: 1rem; */
  @media screen and (max-width: 1150px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const LogoCopyContainer = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 1150px) {
    font-size: 1rem;
  }
`;

export const Nav = styled.div`
  background-image: url(${headerImg});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 100;
  font-family: "Poppins", sans-serif;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-weight: bold;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
`;

export const LogoBox = styled.a`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  display: flex;

  span {
    font-weight: normal;
    font-size: 1.3rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  margin-right: 5rem;

  @media (max-width: 1150px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "270px" : "0")};
    width: 100vw;
    margin-top: -1rem;
  }
`;

export const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  font-size: 1rem;

  &:hover {
    border-radius: 1rem;
    border: 0.1px solid;
  }
`;

export const Hamburger = styled.div`
  display: none;

  flex-direction: column;
  cursor: pointer;

  margin-right: 5rem;

  span {
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 1150px) {
    display: flex;
  }
`;
