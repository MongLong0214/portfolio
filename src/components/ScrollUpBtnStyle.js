import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const fadeInAnimation = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 0.7
  }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  color: white;
  font-size: 300%;
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
  animation: ${fadeInAnimation} 0.5s ease-in-out;
`;
