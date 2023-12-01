import { Header } from "@/components/Header/Header";
import { StyleDivBackGroundDark } from "@/styles/BackGroundDark";
import { StyledContainer } from "@/styles/grid";
import { Link } from "react-router-dom";
import {
  DivportfolioPageLinks,
  H1PortfolioPage,
} from "../PortfolioPage/styleH1PortfolioPage";
import { MainBackEndPage } from "./MainBackEndPage/mainBackEndPage";

export const BackEndPage = () => {
  return (
    <>
      <Header />
      <StyleDivBackGroundDark>
        <StyledContainer>
          <H1PortfolioPage>Portfólio</H1PortfolioPage>
          <DivportfolioPageLinks>
            <Link to="/backend">Back-End</Link>
            <Link to="/fullstack">Full-Stack</Link>
            <Link to="/frontend">Front-End</Link>
            <Link to="/wordpress">WordPress</Link>
          </DivportfolioPageLinks>

          <MainBackEndPage />
        </StyledContainer>
      </StyleDivBackGroundDark>
    </>
  );
};
