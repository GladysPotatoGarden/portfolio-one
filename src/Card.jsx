import "./Card.css";
import { Reveal } from "./Reveal.jsx";

function Card() {
  return (
    <section id="about">
      <Reveal minStage={4}>
        <h1 className="h1-morph helpText">Let me help you with...</h1>
      </Reveal>
    </section>
  );
}

export default Card;
