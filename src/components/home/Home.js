import React from "react";
import Header from "../header/Header";
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
} from "./HomeStyle";
import ProfileImg from "../../img/ProfileImg.jpg";

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
      </SecondPage>
    </>
  );
};

export default Home;
