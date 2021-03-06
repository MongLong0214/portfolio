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
        <SecondPageSubCopy>???????????? ???????????? ???????????????</SecondPageSubCopy>
        <SecondPageSubCopy2>
          ???????????? ???????????? ?????? ????????????.
        </SecondPageSubCopy2>
        <SecondPageSubCopy3>
          ???????????? ??????????????? ????????? ????????? ?????????.
        </SecondPageSubCopy3>
        <SecondPageCircleBox>
          <SecondPageEachCircleBox>
            <SecondPageCircle>
              <StyledFontAwesomeIcon icon={faHtml5} />
            </SecondPageCircle>
            <SecondPageCopyBox>
              HTML/CSS??? Front-end ????????? <br />
              ???????????? ???????????????.
            </SecondPageCopyBox>
          </SecondPageEachCircleBox>
          <SecondPageEachCircleBox>
            <SecondPageCircle>
              <StyledFontAwesomeIcon icon={faJsSquare} />
            </SecondPageCircle>
            <SecondPageCopyBox>
              React??? ??? ??? ????????? ??????
              <br /> Vanila Js??? ???????????? ???????????? ????????????.
            </SecondPageCopyBox>
          </SecondPageEachCircleBox>
          <SecondPageEachCircleBox>
            <SecondPageCircle>
              <StyledFontAwesomeIcon icon={faReact} />
            </SecondPageCircle>
            <SecondPageCopyBox>
              React??? ?????????
              <br /> ?????? ???????????? ????????? 4??? ????????????.
            </SecondPageCopyBox>
          </SecondPageEachCircleBox>
        </SecondPageCircleBox>
        <SecondPageCareer>
          <SecondPageCareerText>
            ???????????? (????????????????????????) - ?????? ?????? PD{" "}
            <span style={{ fontSize: "0.5rem" }}>(2020.01~2021.08) </span>
          </SecondPageCareerText>
          <SecondPageCareerText>
            Social MC (?????? ?????????) - ?????? ?????? ?????? ??? PM{" "}
            <span style={{ fontSize: "0.5rem" }}>(2018.06~2019.10) </span>
          </SecondPageCareerText>
          <SecondPageCareerText>
            ?????? (???????????????) - ?????? ?????? ??? AE{" "}
            <span style={{ fontSize: "0.5rem" }}>(2017.01~2018.03) </span>
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
              <ThirdPageSkillTextBox>
                &nbsp; &nbsp; React &nbsp; &nbsp;
                <ThirdPageSkillSubTextBox> ( recoil )</ThirdPageSkillSubTextBox>
              </ThirdPageSkillTextBox>
            </ThirdPageSkillItem>
          </ThirdPageSkillBox>
          <ThirdPageSkillBox2>
            <ThirdPageSkillHeadCopy>Tools</ThirdPageSkillHeadCopy>
            <ThirdPageSkillSubCopy>Visual Studio Code</ThirdPageSkillSubCopy>
            <ThirdPageSkillSubCopy>Figma</ThirdPageSkillSubCopy>
            <ThirdPageSkillSubCopy>Adobe XD</ThirdPageSkillSubCopy>
            <ThirdPageSkillHeadCopy>Etc.</ThirdPageSkillHeadCopy>
            <ThirdPageSkillSubCopy>Git</ThirdPageSkillSubCopy>
            <ThirdPageSkillSubCopy>Node.js</ThirdPageSkillSubCopy>
            <ThirdPageSkillSubCopy>Python</ThirdPageSkillSubCopy>
          </ThirdPageSkillBox2>
        </ThirdPageSkillBoxContainer>
      </ThirdPage>
      <FourthPage id="Projects">
        <FourthPageHeadCopy>Projects</FourthPageHeadCopy>
        <FourthPageSubCopy>???????????? ????????? ????????? ?????????</FourthPageSubCopy>
        <FourthPageBox>
          <FourthPageItem>
            <FourthPageItemCopyBox>
              <FourthPageItemCopy>
                ???????????? ?????? <br />
                ?????? ?????????
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
              SeoulMate ????????????
            </FourthPageItemImgCopy>
          </FourthPageItem>
          <FourthPageItem>
            <FourthPageItemCopyBox>
              <FourthPageItemCopy>
                ????????? ????????? ???<br /> ?????? ?????????
              </FourthPageItemCopy>
              <FourthPageItemSubCopy>2022.05</FourthPageItemSubCopy>
            </FourthPageItemCopyBox>
            <FourthPageItemImg2
              src={youTube}
              onClick={() => {
                window.open("https://github.com/MongLong0214/YouTubeClone");
              }}
            />
          </FourthPageItem>
          <FourthPageItem>
            <FourthPageItemCopyBox>
              <FourthPageItemCopy>
                ????????? ??? ????????? <br />
                ???????????? ?????????
              </FourthPageItemCopy>
              <FourthPageItemSubCopy>2022.04</FourthPageItemSubCopy>
            </FourthPageItemCopyBox>
            <FourthPageItemImg3
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
              CatchCalorie ????????????
            </FourthPageItemImgCopy>
          </FourthPageItem>
          <FourthPageItem2>
            <FourthPageItemCopyBox>
              <FourthPageItemCopy>
                ??????????????? <br />
                ????????? CRUD
              </FourthPageItemCopy>
              <FourthPageItemSubCopy>2022.03</FourthPageItemSubCopy>
            </FourthPageItemCopyBox>
            <FourthPageItemImg4
              src={git}
              onClick={() => {
                window.open("https://github.com/MongLong0214/BoardCRUD");
              }}
            />
            <FourthPageItemImgCopy
              onClick={() => {
                window.open("https://youtu.be/JoBmSg5emLo");
              }}
            >
              ????????? CRUD ????????????
            </FourthPageItemImgCopy>
          </FourthPageItem2>
        </FourthPageBox>
      </FourthPage>
      <FifthPage id="Testimonial">
        <FifthPageHeadCopy>Testimonials</FifthPageHeadCopy>
        <FifthPageSubCopy>
          ?????? ??? ???????????? ?????? ????????? ???????????????
        </FifthPageSubCopy>
        <FifthPageBox>
          <FifthPageItemBox>
            <FifthPageItemImg src={imoge1} />
            <FifthPageItemCopy>
              ?????? ????????? ????????? ???????????????. ?????? ???????????????, ???????????? ??????
              ???????????? ?????? ????????????.
              <FifthPageItemSubCopy>
                Jisu / elice ai Track 4th
              </FifthPageItemSubCopy>
            </FifthPageItemCopy>
          </FifthPageItemBox>
          <FifthPageItemBox>
            <FifthPageItemImg src={imoge2} />
            <FifthPageItemCopy>
              ?????? ?????????????????? ?????? ????????? ?????????, ???????????? ????????????. ????????? ???
              ??? ???????????? ?????????.
              <FifthPageItemSubCopy>
                {" "}
                Danial Kim / elice ai Track 4th
              </FifthPageItemSubCopy>
            </FifthPageItemCopy>
          </FifthPageItemBox>
          <FifthPageItemBox>
            <FifthPageItemImg src={imoge4} />
            <FifthPageItemCopy>
              UI / UX??? ????????? ?????????. ?????? ????????? ??? ?????? ????????? ??? ????????????
              ????????? ?????? ???????????????.
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
