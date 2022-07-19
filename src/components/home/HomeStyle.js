import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FirstPage = styled.section`
  width: 100%;
  /* height: 89vh; */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e3c53d;

  font-family: "Poppins", sans-serif;
`;

export const FirstPageProfileImg = styled.img`
  width: 22rem;
  height: 22rem;
  border-radius: 100%;
  background-color: #e3c53d;
  margin-top: 12.5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    scale: 1.1;
  }

  @media screen and (max-width: 1150px) {
    margin-top: 5.4rem;
    width: 13rem;
    height: 13rem;
    margin-bottom: 0.5rem;
  }
`;

export const FirstPageProfileCopy = styled.div`
  margin-top: 2rem;
  margin-bottom: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-color: black; */
  font-size: 4rem;
  font-weight: bold;
  color: #7579da;
  @media screen and (max-width: 1150px) {
    overflow: hidden;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const ContactButton = styled.button`
  width: 13rem;
  height: 3.5rem;
  justify-content: center;
  background: #d3d65a;
  border: 2px solid #7579da;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  color: #7579da;
  margin-bottom: 6rem;

  &:hover {
    background: #d3d65a;
    opacity: 0.7;
    border: 2px solid white;
  }

  @media screen and (max-width: 1150px) {
    overflow: hidden;
    width: 8rem;
    height: 2.3rem;
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

export const SecondPage = styled(FirstPage)`
  height: auto;
  background-color: #7579da;
`;

export const SecondPageHeadCopy = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: 5rem;
  font-weight: bold;
  color: #e3c53d;
  @media screen and (max-width: 1150px) {
    overflow: hidden;
    font-size: 3rem;
  }
`;
export const SecondPageSubCopy = styled.div`
  margin-bottom: 1rem;
  margin-top: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  /* background-color: red; */
  font-size: 1.7rem;
  color: #e3c53d;

  font-family: "Noto Sans KR", sans-serif;

  @media screen and (max-width: 1150px) {
    overflow: hidden;
    font-size: 1rem;
  }
`;

export const SecondPageSubCopy2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  /* background-color: red; */
  font-size: 1.7rem;
  color: #faf4d9;

  margin-bottom: 2.5rem;

  font-family: "Noto Sans KR", sans-serif;

  @media screen and (max-width: 1150px) {
    overflow: hidden;
    font-size: 1rem;
  }
`;

export const SecondPageSubCopy3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-color: gray; */
  font-size: 2.5rem;
  font-weight: bold;
  color: #e3c53d;

  font-family: "Noto Sans KR", sans-serif;

  @media screen and (max-width: 1150px) {
    overflow: hidden;
    font-size: 1.3rem;
    padding: 1rem;
  }
`;

export const SecondPageCircleBox = styled.div`
  margin-top: 2rem;
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  font-family: "Noto Sans KR", sans-serif;
  /* background-color: gray; */
  @media screen and (max-width: 1150px) {
    overflow: hidden;
    flex-direction: column;
  }
`;
export const SecondPageEachCircleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: gray; */
  @media screen and (max-width: 1150px) {
    margin-bottom: 2rem;
  }
`;

export const SecondPageEachCircleIMG = styled.img`
  &:hover {
    transform: rotate(-15deg);
  }
`;

export const SecondPageCopyBox = styled.div`
  margin-top: 2rem;

  font-weight: bold;
  font-size: 1.4rem;
  line-height: 2.5rem;
  text-align: center;

  color: #e3c53d;

  display: flex;

  align-items: center;
  @media screen and (max-width: 1150px) {
    overflow: hidden;
    font-size: 1.1rem;
  }

  /* font-family: "Poppins", sans-serif; */
  /* background-color: blue; */
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #e3c53d;
  font-size: 10rem;
  @media screen and (max-width: 1150px) {
    overflow: hidden;
    font-size: 7rem;
  }
`;

export const SecondPageCircle = styled.div`
  box-sizing: border-box;
  border-radius: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 20rem;
  background: #7579da;
  border: 5px solid #8ce2f5;

  &:hover {
    background-color: #e3c53d;
    ${StyledFontAwesomeIcon} {
      color: #7579da;
      transform: rotate(-15deg);
    }
  }
  @media screen and (max-width: 1150px) {
    width: 12rem;
    height: 12rem;
  }
`;

export const SecondPageCareer = styled.div`
  margin-top: 3rem;
  /* background: blue; */

  border-left: 0.3rem solid #8ce2f5;
  margin-bottom: 3rem;
`;
export const SecondPageCareerText = styled.div`
  text-align: left;
  margin-left: 1rem;
  font-size: 1.1rem;
  /* font-style: italic; */
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #faf4d9;
  font-family: "Noto Sans KR", sans-serif;

  @media screen and (max-width: 1150px) {
    overflow: hidden;
    font-size: 0.5rem;
    color: white;
  }
`;

export const ThirdPage = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e3c53d;

  font-family: "Poppins", sans-serif;
`;

export const ThirdPageHeadCopy = styled(SecondPageHeadCopy)`
  /* height: 20vh; */
  margin-top: 1rem;
  /* background-color: blue; */
  font-size: 5rem;
  font-weight: bold;
  color: #7579da;
  @media screen and (max-width: 1150px) {
    overflow: hidden;
    font-size: 3rem;
  }
`;
export const ThirdPageSubCopy = styled(SecondPageSubCopy)`
  font-weight: bold;

  font-size: 1.7em;
  color: #7579da;
  @media screen and (max-width: 1150px) {
    overflow: hidden;
    font-size: 1rem;
  }
`;

export const ThirdPageSkillBoxContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 1150px) {
    overflow: hidden;
    flex-direction: column;
  }
`;

export const ThirdPageSkillBox = styled.div`
  width: 39vw;
  /* height: 65vh; */
  background: #e3c53d;
  border: 3px solid #c3db64;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1150px) {
    width: 75vw;
    border: 3px solid #c3db64;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;

export const ThirdPageSkillBox2 = styled.div`
  width: 40vw;
  /* height: 65vh; */
  background: #e3c53d;
  border: 3px solid #c3db64;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border-left: none;
  @media screen and (max-width: 1150px) {
    width: 75vw;
    border: 3px solid #c3db64;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
`;

export const ThirdPageSkillItem = styled.div`
  /* width: 100%; */

  /* margin-top: 1rem; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* background: black; */
  @media screen and (max-width: 1150px) {
    overflow: hidden;
    flex-direction: column;
  }
`;

export const ThirdPageSkillTextBox = styled.div`
  color: #7579da;
  font-size: 3rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1250px) {
    overflow: hidden;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  /* background: red; */
`;

export const ThirdPageSkillSubTextBox = styled.div`
  color: #7579da;
  font-size: 1rem;
  @media screen and (max-width: 1250px) {
    overflow: hidden;
    font-size: 0.5rem;
  }

  /* background: blue; */
`;

export const ThirdPageSkillCircle = styled.div`
  width: 150px;
  height: 150px;
  border: 4px solid #f1e29e;
  border-radius: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  @media screen and (max-width: 1150px) {
    width: 100px;
    height: 100px;
  }
`;

export const StyledFontAwesomeIcon2 = styled(FontAwesomeIcon)`
  color: #7579da;
  font-size: 6.5rem;
  @media screen and (max-width: 1150px) {
    font-size: 4rem;
  }
`;

export const ThirdPageSkillHeadCopy = styled(SecondPageHeadCopy)`
  /* height: 20vh; */
  margin-top: 1.5rem;
  /* background-color: blue; */
  font-size: 5rem;
  font-weight: bold;
  color: #7579da;
  @media screen and (max-width: 1150px) {
    overflow: hidden;
    font-size: 2rem;
  }
`;

export const ThirdPageSkillSubCopy = styled(SecondPageSubCopy)`
  margin-bottom: 1rem;
  margin-top: 1rem;

  font-weight: bold;
  /* background-color: red; */
  font-size: 1.7rem;
  color: #7579da;
  @media screen and (max-width: 1150px) {
    overflow: hidden;
    font-size: 1rem;
  }
`;

export const FourthPage = styled(FirstPage)`
  height: auto;
  background-color: #7579da;
`;

export const FourthPageHeadCopy = styled(SecondPageHeadCopy)`
  /* height: 20vh; */
  margin-top: 2rem;
  /* background-color: blue; */
  font-size: 5rem;
  font-weight: bold;
  color: #e3c53d;
  font-family: "Poppins", sans-serif;

  @media screen and (max-width: 1150px) {
    overflow: hidden;
    font-size: 3rem;
  }
`;
export const FourthPageSubCopy = styled(SecondPageSubCopy)`
  margin-bottom: 1rem;
  margin-top: 1rem;

  font-weight: bold;
  /* background-color: red; */
  font-size: 1.7rem;
  color: #e3c53d;
  font-family: "Noto Sans KR", sans-serif;
  @media screen and (max-width: 1150px) {
    overflow: hidden;
    font-size: 1rem;
  }
`;

export const FourthPageBox = styled.div`
  margin: 3rem;
  width: 78vw;

  box-sizing: border-box;
  border: 3px solid #8ce2f5;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin-top: 5rem;
  margin-bottom: 14rem;

  /* background-color: white; */
  @media screen and (max-width: 1150px) {
    overflow: hidden;
    flex-direction: column;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;

export const FourthPageItem = styled.div`
  width: 25%;
  /* background-color: gray; */

  border-right: 1px solid #8ce2f5;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1150px) {
    width: 100%;
    overflow: hidden;
    flex-direction: column;
    border-bottom: 1px solid #8ce2f5;
    border-right: none;
  }
`;

export const FourthPageItem2 = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: blue; */
  /* background-color: red; */
  @media screen and (max-width: 1150px) {
    width: 100%;
    overflow: hidden;
    flex-direction: column;
  }
`;

export const FourthPageItemCopyBox = styled.div`
  /* background-color: blue; */
`;

export const FourthPageItemCopy = styled(SecondPageHeadCopy)`
  /* height: 20vh; */
  margin-top: 2rem;
  /* background-color: blue; */
  font-size: 2rem;
  font-weight: bold;
  color: #e3c53d;
  font-family: "Noto Sans KR", sans-serif;
  @media screen and (max-width: 1150px) {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
`;

export const FourthPageItemSubCopy = styled(SecondPageSubCopy)`
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-weight: normal;
  font-size: 1rem;
  color: #e3c53d;
  font-family: "Poppins", sans-serif;
`;

export const FourthPageItemImg = styled.img`
  width: 50%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    opacity: 0.7;
  }
  @media screen and (max-width: 1150px) {
    width: 20%;
  }

  /* background-color: blue; */
`;
export const FourthPageItemImg2 = styled.img`
  width: 40%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 2rem;

  &:hover {
    transform: scale(1.1);
    opacity: 0.7;
  }
  @media screen and (max-width: 1150px) {
    width: 20%;
    margin-bottom: 2rem;
  }

  /* background-color: blue; */
`;
export const FourthPageItemImg3 = styled.img`
  width: 40%;

  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    opacity: 0.7;
  }
  @media screen and (max-width: 1150px) {
    width: 20%;
  }

  /* background-color: blue; */
`;
export const FourthPageItemImg4 = styled.img`
  width: 33%;
  margin-top: 1.2rem;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.2rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    opacity: 0.7;
  }
  @media screen and (max-width: 1150px) {
    width: 20%;
    margin-bottom: 2rem;
  }

  /* background-color: blue; */
`;

export const FourthPageItemImgCopy = styled(SecondPageSubCopy)`
  font-weight: bold;
  /* background-color: red; */
  font-size: 1.3rem;
  color: #e3c53d;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    opacity: 0.7;
  }
`;

export const FifthPage = styled(FirstPage)`
  height: auto;
`;

export const FifthPageHeadCopy = styled(SecondPageHeadCopy)`
  margin-top: 2.5rem;
  font-size: 5rem;
  font-weight: bold;
  color: #7579da;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 1150px) {
    overflow: hidden;
    font-size: 2.3rem;
    margin-bottom: -1rem;
  }
`;
export const FifthPageSubCopy = styled(SecondPageSubCopy)`
  margin-bottom: 1rem;
  margin-top: 1.5rem;
  font-weight: bold;
  font-size: 1.7rem;
  color: #7579da;
  font-family: "Noto Sans KR", sans-serif;
  @media screen and (max-width: 1150px) {
    overflow: hidden;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
`;

export const FifthPageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-right: 8rem; */
`;

export const FifthPageItemBox = styled.div`
  width: 100%;
  margin-bottom: 1.1rem;
  display: flex;
  align-items: center;

  /* background-color: #19c4eb; */
`;

export const FifthPageItemImg = styled.img`
  width: 14rem;
  @media screen and (max-width: 1150px) {
    width: 7rem;
    margin-right: -1rem;
  }
`;

export const FifthPageItemCopy = styled.div`
  padding: 2rem;
  background: #ffe9e9;
  border-radius: 3rem;
  display: flex;
  font-size: 1.3rem;
  font-weight: bold;
  flex-direction: column;
  font-family: "Noto Sans KR", sans-serif;
  @media screen and (max-width: 1150px) {
    overflow: hidden;
    font-size: 0.7rem;
    padding: 1rem;
    width: 50vw;
  }
`;
export const FifthPageItemSubCopy = styled.div`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: normal;
  display: flex;
  justify-content: flex-end;

  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 1150px) {
    overflow: hidden;
    font-size: 0.4rem;
    margin-top: 0.2rem;
    margin-right: 1rem;
  }
`;
