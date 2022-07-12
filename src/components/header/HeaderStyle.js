import styled from "styled-components";
import headerImg from "../../img/headerIMG.jpg";

export const MainContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-image: url(${headerImg});
  background-repeat: no-repeat;
  background-size: cover;

  position: fixed;
`;
export const LogoContainer = styled.div`
  height: 10vh;
  display: flex;
`;

export const LogoImgContainer = styled.img`
  width: 4rem;
  height: 4rem;
  padding: 1rem;
`;

export const LogoCopyContainer = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
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
