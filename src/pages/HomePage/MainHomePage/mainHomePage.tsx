import { Link } from "react-router-dom";
import ImagemMain from "../../../assets/img/DesenvolvedorFrontend.svg";
import { StyleDivMainContainer, StyleMainContainer } from "./styleMain";
export const MainHomePage = () => {
  return (
    <StyleMainContainer>
      <StyleDivMainContainer>
        <h1>
          <small>Olá,</small> <br />
          Eu sou Geraldo Pereira, Desenvolvedor Full-Stack
        </h1>

        <h2>Seja bem-vindo ao meu portfólio website</h2>

        <Link
          title="Conheça sobre Geraldo pereira Desenvolvedor Front-End | Back-End | Full-Stack"
          to="/sobre"
        >
          Saiba mais sobre mim
        </Link>
      </StyleDivMainContainer>
      <img
        src={ImagemMain}
        alt="Imagem animada Desenvolvedor"
        title="Desenvolvedor Front-End | Back-End | Full-Stack"
      />
    </StyleMainContainer>
  );
};
