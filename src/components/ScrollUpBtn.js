import React, { useState, useEffect } from "react";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { StyledFontAwesomeIcon } from "./ScrollUpBtnStyle";

const ScrollUpBtn = () => {
  const [ScrollY, setScrollY] = useState(0);
  const [btnState, setBtnState] = useState(false);

  const ScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log(ScrollY);
  };

  const handleScroll = () => {
    if (ScrollY > 100) {
      console.log("ScrollY: ", ScrollY);
      setScrollY(window.pageYOffset);
      setBtnState(true);
    } else {
      console.log("ScrollY: ", ScrollY);
      setScrollY(window.pageYOffset);
      setBtnState(false);
    }
  };
  //새로고침 시 화면 최상단으로 이동 & 스크롤업 버튼 숨기기
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
    setBtnState(false);
  }, []);

  useEffect(() => {
    const scrollHandler = () => {
      window.addEventListener("scroll", handleScroll);
    };
    scrollHandler();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  if (btnState) {
    return <StyledFontAwesomeIcon onClick={ScrollUp} icon={faCircleArrowUp} />;
  } else {
    return null;
  }
};

export default ScrollUpBtn;
