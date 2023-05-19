import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ScrollUpBtn from "../ScrollUpBtn";

import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

import {
  FirstPage,
  FirstPageProfileImg,
  FirstPageProfileCopy,
  ContactButton,
  SecondPage,
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
  ThirdPageSkillHeadCopy,
  ThirdPageSkillSubCopy,
  FourthPage,
  FourthPageHeadCopy,
  FourthPageSubCopy,
  FourthPageBox,
  FourthPageItem,
  FourthPageItem2,
  FourthPageItemCopyBox,
  FourthPageItemCopy,
  FourthPageItemSubCopy,
  FourthPageItemImg,
  FourthPageItemImg2,
  FourthPageItemImg3,
  FourthPageItemImg4,
  FourthPageItemImgCopy,
  FifthPage,
  FifthPageHeadCopy,
  FifthPageSubCopy,
  FifthPageBox,
  FifthPageItemBox,
  FifthPageItemImg,
  FifthPageItemCopy,
  FifthPageItemSubCopy,
} from "./HomeStyle";
import ProfileImg from "../../img/ProfileImg.jpg";
import SeoulMate from "../../img/SeoulMate.png";
import youTube from "../../img/youTube.png";
import CatchCalorie from "../../img/CatchCalorie.png";
import SDLogo from "../../img/SD.png";
import git from "../../img/git.png";
import imoge1 from "../../img/imoge2.png";
import imoge2 from "../../img/imoge1.png";
import imoge4 from "../../img/imoge4.png";

const Home = () => {
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState("");
  const [projects, setProjects] = useState("");
  const [testimonial, setTestimonial] = useState("");

  useEffect(() => {
    const about = document.querySelector("#About").offsetTop;
    const skills = document.querySelector("#Skills").offsetTop;
    const projects = document.querySelector("#Projects").offsetTop;
    const testimonial = document.querySelector("#Testimonial").offsetTop;

    setAbout(about);
    setSkills(skills);
    setProjects(projects);
    setTestimonial(testimonial);
  }, []);

  return (
    <>
      <Header
        about={about}
        skills={skills}
        projects={projects}
        testimonial={testimonial}
      />
      <FirstPage id="Home">
        <FirstPageProfileImg
          src={ProfileImg}
          onClick={() => {
            window.open(
              "https://www.notion.so/3ddb159f9ffa4530aeecf3cb0af1a23b"
            );
          }}
        />
        <FirstPageProfileCopy>
          Hello,
          <br /> I'm an active Front-end Developer
        </FirstPageProfileCopy>
        <ScrollUpBtn />
        <ContactButton
          onClick={() => {
            window.scrollTo({ top: 6000, behavior: "smooth" });
          }}
        >
          Contact Me
        </ContactButton>
      </FirstPage>
      <SecondPage id="About">
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
              tailwind, mui, antd, bootstrap, styledcomponent 등 <br />
              다양한 스타일링 라이브러리를 사용 할 수 있습니다.
            </SecondPageCopyBox>
          </SecondPageEachCircleBox>
          <SecondPageEachCircleBox>
            <SecondPageCircle>
              <StyledFontAwesomeIcon icon={faJsSquare} />
            </SecondPageCircle>
            <SecondPageCopyBox>
              Vanila Js를 중요하게 생각하고 있으며,
              <br />
              TypeScript를 사용 할 수 있습니다.
            </SecondPageCopyBox>
          </SecondPageEachCircleBox>
          <SecondPageEachCircleBox>
            <SecondPageCircle>
              <StyledFontAwesomeIcon icon={faReact} />
            </SecondPageCircle>
            <SecondPageCopyBox>
              SSR 및 SEO 최적화를 위해 Next.js를 사용 할 수 있습니다.
            </SecondPageCopyBox>
          </SecondPageEachCircleBox>
        </SecondPageCircleBox>
        <SecondPageCareer>
          <SecondPageCareerText>
            주식회사 풀스택 (비대면 본인인증 서비스) - 프론트엔드 개발자
            <span style={{ fontSize: "0.5rem" }}>(2022.09~2023.05) </span>
          </SecondPageCareerText>
          <SecondPageCareerText>
            React 및 Vue를 사용한 프론트엔드 개발을 담당하고 있습니다.
          </SecondPageCareerText>
        </SecondPageCareer>
      </SecondPage>
      <ThirdPage id="Skills">
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
                  (tailwind, bootstrap, mui)
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
              <ThirdPageSkillTextBox>
                &nbsp; &nbsp; React &nbsp; &nbsp;
                <ThirdPageSkillSubTextBox>
                  {" "}
                  ( Next.js )
                </ThirdPageSkillSubTextBox>
              </ThirdPageSkillTextBox>
            </ThirdPageSkillItem>
          </ThirdPageSkillBox>
          <ThirdPageSkillBox2>
            <ThirdPageSkillHeadCopy>Tools</ThirdPageSkillHeadCopy>
            <ThirdPageSkillSubCopy>Webstorm</ThirdPageSkillSubCopy>
            <ThirdPageSkillSubCopy>Visual Studio Code</ThirdPageSkillSubCopy>
            <ThirdPageSkillSubCopy>Figma</ThirdPageSkillSubCopy>
            <ThirdPageSkillHeadCopy>Etc.</ThirdPageSkillHeadCopy>
            <ThirdPageSkillSubCopy>Vue.js</ThirdPageSkillSubCopy>
            <ThirdPageSkillSubCopy>Node.js</ThirdPageSkillSubCopy>
            <ThirdPageSkillSubCopy>Python</ThirdPageSkillSubCopy>
          </ThirdPageSkillBox2>
        </ThirdPageSkillBoxContainer>
      </ThirdPage>
      <FourthPage id="Projects">
        <FourthPageHeadCopy>Projects</FourthPageHeadCopy>
        <FourthPageSubCopy>지금까지 작업한 결과물 입니다</FourthPageSubCopy>
        <FourthPageBox>
          <FourthPageItem>
            <FourthPageItemCopyBox>
              <FourthPageItemCopy>
                생성형 AI를 활용한
                <br />
                의상 변경 서비스
              </FourthPageItemCopy>
              <FourthPageItemSubCopy>2022.06</FourthPageItemSubCopy>
            </FourthPageItemCopyBox>
            <FourthPageItemImg
              src={SDLogo}
              onClick={() => {
                window.open("https://github.com/MongLong0214/team-diver");
              }}
            />
            <FourthPageItemImgCopy
              onClick={() => {
                window.open("https://stablediffusion-test.vercel.app/main");
              }}
            >
              앱 실행
            </FourthPageItemImgCopy>
          </FourthPageItem>
          <FourthPageItem>
            <FourthPageItemCopyBox>
              <FourthPageItemCopy>
                랜드마크 정보 <br />
                예측 서비스
              </FourthPageItemCopy>
              <FourthPageItemSubCopy>2022.06</FourthPageItemSubCopy>
            </FourthPageItemCopyBox>
            <FourthPageItemImg
              src={SeoulMate}
              onClick={() => {
                window.open("https://github.com/MongLong0214/SeoulMate");
              }}
            />
            <FourthPageItemImgCopy
              onClick={() => {
                window.open("https://youtu.be/83OacAZYUTE");
              }}
            >
              SeoulMate 시연영상
            </FourthPageItemImgCopy>
          </FourthPageItem>
          <FourthPageItem>
            <FourthPageItemCopyBox>
              <FourthPageItemCopy>
                동영상 업로드 및<br /> 공유 서비스
              </FourthPageItemCopy>
              <FourthPageItemSubCopy>2022.05</FourthPageItemSubCopy>
            </FourthPageItemCopyBox>
            <FourthPageItemImg3
              src={youTube}
              onClick={() => {
                window.open("https://github.com/MongLong0214/YouTubeClone");
              }}
            />
          </FourthPageItem>
          <FourthPageItem2>
            <FourthPageItemCopyBox>
              <FourthPageItemCopy>
                칼로리 및 운동량 <br />
                모니터링 서비스
              </FourthPageItemCopy>
              <FourthPageItemSubCopy>2022.04</FourthPageItemSubCopy>
            </FourthPageItemCopyBox>
            <FourthPageItemImg4
              src={CatchCalorie}
              onClick={() => {
                window.open("https://github.com/MujiDev/catch-calorie");
              }}
            />
            <FourthPageItemImgCopy
              onClick={() => {
                window.open("https://youtu.be/5eMSi_ZKytI");
              }}
            >
              CatchCalorie 시연영상
            </FourthPageItemImgCopy>
          </FourthPageItem2>
        </FourthPageBox>
      </FourthPage>
      <FifthPage id="Testimonial">
        <FifthPageHeadCopy>Testimonials</FifthPageHeadCopy>
        <FifthPageSubCopy>
          저를 본 사람들은 저를 이렇게 평가합니다
        </FifthPageSubCopy>
        <FifthPageBox>
          <FifthPageItemBox>
            <FifthPageItemImg src={imoge1} />
            <FifthPageItemCopy>
              같이 일하면 즐거운 사람입니다. 항상 적극적이며, 개선점을 찾아
              수정하는 것을 즐깁니다.
              <FifthPageItemSubCopy>
                Jisu / elice ai Track 4th
              </FifthPageItemSubCopy>
            </FifthPageItemCopy>
          </FifthPageItemBox>
          <FifthPageItemBox>
            <FifthPageItemImg src={imoge2} />
            <FifthPageItemCopy>
              함께 브레인스토밍 하는 과정을 즐기고, 추진력이 있습니다. 협업을 할
              줄 아는사람 입니다.
              <FifthPageItemSubCopy>
                {" "}
                Danial Kim / elice ai Track 4th
              </FifthPageItemSubCopy>
            </FifthPageItemCopy>
          </FifthPageItemBox>
          <FifthPageItemBox>
            <FifthPageItemImg src={imoge4} />
            <FifthPageItemCopy>
              UI / UX에 관심이 많아요. 쉽게 지나칠 수 있는 디테일 한 부분들을
              놓치지 않는 사람입니다.
              <FifthPageItemSubCopy>
                {" "}
                Anna Jung/ elice ai Track 4th
              </FifthPageItemSubCopy>
            </FifthPageItemCopy>
          </FifthPageItemBox>
        </FifthPageBox>
      </FifthPage>
      <Footer />
    </>
  );
};

export default Home;
