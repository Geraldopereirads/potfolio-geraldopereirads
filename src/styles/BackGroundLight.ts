import styled from "styled-components";
import imageLight from "../assets/img/backgroundLight.svg";

export const StyleDivBackGroundLight = styled.div`
  min-height: 100vh;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${imageLight});
    opacity: 0.8;
  }
`;
