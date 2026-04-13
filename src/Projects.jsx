import "./Projects.css";
import Quazar from "./assets/Quazar.png";
import SirFizzaloImg from "./assets/SirFizzalo.png";
import { Reveal } from "./Reveal.jsx";

function Projects() {
  return (
    <section id="projects" className="projects-Container">
      <Reveal minStage={6}>
        <h1>Projects</h1>
      </Reveal>
      <Reveal minStage={7}>
        <div className="project-item">
          <figure className="project-figure">
            <a href="">
              <img className="project-image" src={Quazar} alt="Quazar Entertainment" />
            </a>
            <figcaption className="project-label">Quazar Entertainment</figcaption>
          </figure>
        </div>
      </Reveal>

      <Reveal minStage={8}>
        <div className="project-item">
          <figure className="project-figure">
            <img className="project-image" src={SirFizzaloImg} alt="SirFizzalo" />
            <figcaption className="project-label">SirFizzalo</figcaption>
          </figure>
        </div>
      </Reveal>
    </section>
  );
}

export default Projects;
