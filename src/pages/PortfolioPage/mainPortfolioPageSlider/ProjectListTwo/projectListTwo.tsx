import { GrGithub } from "react-icons/gr";
import { RxVercelLogo } from "react-icons/rx";
import { Link } from "react-router-dom";
import {
  ProjectListStyleLiTwo,
  ProjectListStyleDivTwo,
} from "./projectListStyleTwo";

export const ProjectsListTwo = ({ project }: any) => {
  return (
    <ProjectListStyleLiTwo>
      <Link target="_blank" title="projeto" to={project.urlVercel}>
        <h2>{project.title}</h2>
      </Link>
      <Link target="_blank" title="projeto" to={project.urlVercel}>
        <img src={project.img} alt="Projeto" />
      </Link>
      <Link target="_blank" title="projeto" to={project.urlVercel}></Link>
      <ProjectListStyleDivTwo>
        <Link title="Vercel" target="_blank" to={project.urlVercel}>
          <RxVercelLogo size={35} />
        </Link>
        <Link title="Github" target="_blank" to={project.github}>
          <GrGithub size={35} />
        </Link>
      </ProjectListStyleDivTwo>
    </ProjectListStyleLiTwo>
  );
};
