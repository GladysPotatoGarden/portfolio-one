/* eslint-disable react/prop-types */
import { useRevealStage } from "./RevealContext.jsx";
import "./Reveal.css";

export function Reveal({ minStage, children, className = "" }) {
  const stage = useRevealStage();
  const visible = stage >= minStage;
  return (
    <div
      className={`reveal${visible ? " reveal--visible" : ""}${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
}
