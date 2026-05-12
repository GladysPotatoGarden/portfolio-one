import "./Projects.css";
import Quazar from "./assets/Quazar.png";
import SirFizzaloImg from "./assets/SirFizzalo.png";
import SirFizzaloHarmonicExciterImg from "./assets/SirFizzaloHarmonicExciter.png";
import SirFizzaloReverbImg from "./assets/SirFizzaloReverb.png";
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
            <a
              href="https://admirable-cupcake-4b5cdf.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="project-image" src={Quazar} alt="Quazar Entertainment" />
            </a>
            <figcaption className="project-label">Quazar Entertainment</figcaption>
          </figure>
        </div>
      </Reveal>

      <Reveal minStage={8}>
        <div className="project-item">
          <figure className="project-figure">
            <img
              className="project-image"
              src={SirFizzaloImg}
              alt="SirFizzalo Modulator"
            />
            <figcaption className="project-label">SirFizzalo Modulator</figcaption>
          </figure>
        </div>
      </Reveal>

      <Reveal minStage={9}>
        <div className="project-item">
          <figure className="project-figure">
            <img
              className="project-image"
              src={SirFizzaloHarmonicExciterImg}
              alt="SirFizzalo Harmonic Exciter"
            />
            <figcaption className="project-label">
              SirFizzalo Harmonic Exciter
            </figcaption>
          </figure>
        </div>
      </Reveal>

      <Reveal minStage={10}>
        <div className="project-item">
          <figure className="project-figure">
            <img
              className="project-image"
              src={SirFizzaloReverbImg}
              alt="SirFizzalo Reverb"
            />
            <figcaption className="project-label">SirFizzalo Reverb</figcaption>
          </figure>
        </div>
      </Reveal>
    </section>
  );
}

export default Projects;
