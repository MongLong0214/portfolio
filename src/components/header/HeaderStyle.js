import styled from "styled-components";
import headerImg from "../../img/headerIMG.jpg";

export const MainContainer = styled.section`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-image: url(${headerImg});
  background-repeat: no-repeat;
  background-size: cover;

  position: fixed;
  z-index: 100;
  font-family: "Poppins", sans-serif;
`;
export const LogoContainer = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoImgContainer = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  padding: 1rem;
  @media screen and (max-width: 960px) {
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

  @media screen and (max-width: 960px) {
    font-size: 1rem;
  }
`;

export const NavContainer = styled.ul`
  list-style: none;
  font-size: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  /* background-color: gray; */
  padding-right: 1.5rem;

  @media screen and (max-width: 960px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    /* transition: max-height 0.3s ease-in; */
    width: 100%;
  }
`;
export const HamburgerMenu = styled.ul`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-right: 3rem;

  span {
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
    font-size: 1rem;
  }
  @media (max-width: 960px) {
    display: flex;
  }
`;

export const NavItem = styled.li`
  /* width: 10rem; */
  font-size: 1.2rem;
  padding-right: 3rem;
  font-weight: bold;

  padding: 8px 12px;
  margin: 0 4px;
  cursor: pointer;

  &:hover {
    border-radius: 5px;
    border: 0.2px solid;
  }
`;
