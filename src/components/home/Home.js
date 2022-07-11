import React from "react";
import Header from "../header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

import {
  FirstPage,
  FirstPageProfileImg,
  FirstPageProfileCopy,
  ContactButton,
  SecondPage,
  //   SecondPageCopyBox,
  SecondPageHeadCopy,
  SecondPageSubCopy,
  SecondPageSubCopy2,
  SecondPageSubCopy3,
  SecondPageCircleBox,
  SecondPageEachCircleBox,
  SecondPageCopyBox,
  SecondPageCircle,
  SecondPageCareer,
  SecondPageCareerText,
  ThirdPage,
  ThirdPageHeadCopy,
  ThirdPageSubCopy,
  ThirdPageSkillBoxContainer,
  ThirdPageSkillBox,
  ThirdPageSkillItem,
  ThirdPageSkillCircle,
  StyledFontAwesomeIcon,
  ThirdPageSkillTextBox,
  ThirdPageSkillSubTextBox,
  ThirdPageSkillBox2,
  StyledFontAwesomeIcon2,
} from "./HomeStyle";
import ProfileImg from "../../img/ProfileImg.jpg";
import HTML from "../../img/HTML.png";
import JS from "../../img/JS.png";
import REACT from "../../img/REACT.png";

import imoge1 from "../../img/imoge1.png";
import imoge2 from "../../img/imoge2.png";

const Home = () => {
  return (
    <>
      <Header />
      <FirstPage>
        <FirstPageProfileImg src={ProfileImg} />
        <FirstPageProfileCopy>
          Hello,
          <br /> I'm an active Front-end Developer
        </FirstPageProfileCopy>
        <ContactButton>Contact Me</ContactButton>
      </FirstPage>
      <SecondPage>
        <SecondPageHeadCopy>About Me</SecondPageHeadCopy>
        <SecondPageSubCopy>돌덩이를 관통하는 물방울처럼</SecondPageSubCopy>
        <SecondPageSubCopy2>
          집요함과 꾸준함의 힘을 믿습니다.
        </SecondPageSubCopy2>
        <SecondPageSubCopy3>
          능동적인 프론트엔드 개발자 조원일 입니다.
        </SecondPageSubCopy3>
        <SecondPageCircleBox>
          <SecondPageEachCircleBox>
            <SecondPageCircle>
              <StyledFontAwesomeIcon icon={faHtml5} />
            </SecondPageCircle>
            <SecondPageCopyBox>
              HTML/CSS를 Front-End 개발에 <br />
              적합하게 작성합니다.
            </SecondPageCopyBox>
          </SecondPageEachCircleBox>
          <SecondPageEachCircleBox>
            <SecondPageCircle>
              <StyledFontAwesomeIcon icon={faJsSquare} />
            </SecondPageCircle>
            <SecondPageCopyBox>
              React를 더 잘 다루기 위해
              <br /> Vanila Js를 중요하게 생각하고 있습니다.
            </SecondPageCopyBox>
          </SecondPageEachCircleBox>
          <SecondPageEachCircleBox>
            <SecondPageCircle>
              <StyledFontAwesomeIcon icon={faReact} />
            </SecondPageCircle>
            <SecondPageCopyBox>
              React를 이용한
              <br /> 협업 프로젝트 경험이 4회 있습니다.
            </SecondPageCopyBox>
          </SecondPageEachCircleBox>
        </SecondPageCircleBox>
        <SecondPageCareer>
          <SecondPageCareerText>
            비디오샵 (광고제작프로덕션) - 광고 제작 PD{" "}
            <span style={{ "font-size": "0.5rem" }}>(2020.01~2021.08) </span>
          </SecondPageCareerText>
          <SecondPageCareerText>
            Social MC (광고 대행사) - 영상 광고 기획 및 PM{" "}
            <span style={{ "font-size": "0.5rem" }}>(2018.06~2019.10) </span>
          </SecondPageCareerText>
          <SecondPageCareerText>
            준콤 (광고대행사) - 광고 영업 및 AE{" "}
            <span style={{ "font-size": "0.5rem" }}>(2017.01~2018.03) </span>
          </SecondPageCareerText>
        </SecondPageCareer>
      </SecondPage>
      <ThirdPage>
        <ThirdPageHeadCopy>Skills</ThirdPageHeadCopy>
        <ThirdPageSubCopy>Skills & Attributes </ThirdPageSubCopy>
        <ThirdPageSkillBoxContainer>
          <ThirdPageSkillBox>
            <ThirdPageSkillItem>
              <ThirdPageSkillCircle>
                <StyledFontAwesomeIcon2 icon={faHtml5} />
              </ThirdPageSkillCircle>
              <ThirdPageSkillTextBox>
                Html / Css
                <ThirdPageSkillSubTextBox>
                  ( styled-component )
                </ThirdPageSkillSubTextBox>
              </ThirdPageSkillTextBox>
            </ThirdPageSkillItem>
            <ThirdPageSkillItem>
              <ThirdPageSkillCircle>
                <StyledFontAwesomeIcon2 icon={faJsSquare} />
              </ThirdPageSkillCircle>
              <ThirdPageSkillTextBox>
                JavaScript
                <ThirdPageSkillSubTextBox>
                  ( TypeScript )
                </ThirdPageSkillSubTextBox>
              </ThirdPageSkillTextBox>
            </ThirdPageSkillItem>
            <ThirdPageSkillItem>
              <ThirdPageSkillCircle>
                <StyledFontAwesomeIcon2 icon={faReact} />
              </ThirdPageSkillCircle>
              <ThirdPageSkillTextBox style={{ marginLeft: "4rem" }}>
                React
                <ThirdPageSkillSubTextBox>( recoil )</ThirdPageSkillSubTextBox>
              </ThirdPageSkillTextBox>
            </ThirdPageSkillItem>
          </ThirdPageSkillBox>
          <ThirdPageSkillBox2></ThirdPageSkillBox2>
        </ThirdPageSkillBoxContainer>
      </ThirdPage>
    </>
  );
};

export default Home;
