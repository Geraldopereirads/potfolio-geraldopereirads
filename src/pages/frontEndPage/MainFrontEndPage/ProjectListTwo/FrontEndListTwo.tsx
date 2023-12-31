import { GrGithub } from "react-icons/gr";
import { RxVercelLogo } from "react-icons/rx";
import { Link } from "react-router-dom";
import {
  FrontEndListStyleLiTwo,
  FrontEndListStyleDivTwo,
} from "./FrontEndListStyleTwo";

export const FrontEndsListTwo = ({ frontend }: any) => {
  return (
    <FrontEndListStyleLiTwo>
      <Link target="_blank" title="projeto" to={frontend.urlVercel}>
        <h2>{frontend.title}</h2>
      </Link>

      <Link target="_blank" title="projeto" to={frontend.urlVercel}>
        <img src={frontend.img} alt="Projeto" />
      </Link>

      <FrontEndListStyleDivTwo>
        <Link title="Vercel" target="_blank" to={frontend.urlVercel}>
          <RxVercelLogo size={35} />
        </Link>
        <Link title="Github" target="_blank" to={frontend.github}>
          <GrGithub size={35} />
        </Link>
      </FrontEndListStyleDivTwo>
    </FrontEndListStyleLiTwo>
  );
};
