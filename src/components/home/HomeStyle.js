import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FirstPage = styled.section`
  width: 100%;
  height: 85vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e3c53d;
`;

export const FirstPageProfileImg = styled.img`
  width: 18rem;
  height: 18rem;
  border-radius: 50%;
  background-color: #e3c53d;
`;

export const FirstPageProfileCopy = styled.div`
  width: 28vw;
  height: 20vh;
  margin-top: 2rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-color: black; */
  font-size: 2rem;
  font-weight: bold;
  color: #7579da;
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

  &:hover {
    background: #d3d65a;
    opacity: 0.7;
    border: 2px solid white;
  }
`;

export const SecondPage = styled(FirstPage)`
  height: auto;
  background-color: #19c4eb;
`;

export const SecondPageHeadCopy = styled.div`
  /* height: 20vh; */
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-color: blue; */
  font-size: 5rem;
  font-weight: bold;
  color: #dcdf50;
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
  color: #dcdf50;
`;

export const SecondPageSubCopy2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  /* background-color: red; */
  font-size: 1.7rem;
  color: #aa78bc;

  margin-bottom: 2.5rem;
`;

export const SecondPageSubCopy3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-color: gray; */
  font-size: 2.5rem;
  font-weight: bold;
  color: #dcdf50;
`;

export const SecondPageCircleBox = styled.div`
  margin-top: 2rem;
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background-color: gray; */
`;
export const SecondPageEachCircleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: gray; */
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

  color: #dcdf50;

  display: flex;

  align-items: center;
  /* background-color: blue; */
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #dcdf50;
  font-size: 10rem;
`;

export const SecondPageCircle = styled.div`
  box-sizing: border-box;
  border-radius: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 20rem;
  background: #19c4eb;
  border: 5px solid #8ce2f5;

  &:hover {
    background-color: #dcdf50;
    ${StyledFontAwesomeIcon} {
      color: #19c4eb;
      transform: rotate(-15deg);
    }
  }
`;

export const SecondPageCareer = styled.div`
  /* justify-content: flex-start;
  align-items: flex-start; */
  margin-top: 3rem;
  /* background: blue; */

  border-left: 0.3rem solid #8ce2f5;
  margin-bottom: 3rem;
`;
export const SecondPageCareerText = styled.div`
  text-align: left;
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #dcdf50;
`;

export const ThirdPage = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e3c53d;
`;

export const ThirdPageHeadCopy = styled(SecondPageHeadCopy)`
  /* height: 20vh; */
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-color: blue; */
  font-size: 5rem;
  font-weight: bold;
  color: #7579da;
`;
export const ThirdPageSubCopy = styled(SecondPageSubCopy)`
  margin-bottom: 1rem;
  margin-top: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  /* background-color: red; */
  font-size: 1.7rem;
  color: #7579da;
`;

export const ThirdPageSkillBoxContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

export const ThirdPageSkillBox = styled.div`
  width: 60%;
  /* height: 65vh; */
  background: #e3c53d;
  border: 3px solid #c3db64;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
`;

export const ThirdPageSkillItem = styled.div`
  /* width: 40vw; */
  /* height: 65vh; */

  display: flex;
  align-items: center;
  /* background: black; */
`;

export const ThirdPageSkillTextBox = styled.div`
  color: #7579da;
  font-size: 3rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  /* background: red; */
`;

export const ThirdPageSkillSubTextBox = styled.div`
  color: #7579da;
  font-size: 1rem;

  /* background: blue; */
`;
export const ThirdPageSkillBox2 = styled.div`
  width: 40vw;
  /* height: 65vh; */
  background: #e3c53d;
  border: 3px solid #c3db64;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border-left: none;
`;

export const ThirdPageSkillCircle = styled.div`
  width: 10rem;
  height: 10rem;

  border: 4px solid #f1e29e;

  border-radius: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem;
`;

export const StyledFontAwesomeIcon2 = styled(FontAwesomeIcon)`
  color: #7579da;
  font-size: 6rem;
`;
