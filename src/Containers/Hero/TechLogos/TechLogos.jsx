import "./TechLogos.css";
import { useContext } from "react";
import { LogosContext } from "../../../App";

function TechLogos() {
  const handleOnMouseOver = (e) => {
    const className = e.target.className;
    document.querySelector(`p.logo.${className}`).style.visibility = "visible";
  };

  const handleOnMouseLeave = (e) => {
    const className = e.target.className;
    document.querySelector(`p.logo.${className}`).style.visibility = "hidden";
  };

  let technologiesArray = useContext(LogosContext);
  technologiesArray = technologiesArray.slice(0, 6);

  return (
    <div className="TechLogos">
      {technologiesArray.map((tech) => {
        return (
          <div className={`logoContainer ${tech.name} bounce`} key={tech.name}>
            <img
              src={tech.logo}
              onMouseOver={handleOnMouseOver}
              onMouseLeave={handleOnMouseLeave}
              className={`${tech.name}`}
              key={`hero-${tech.name}`}
              alt={`${tech.name} logo`}
            />
            <p className={`logo ${tech.name}`} style={{ visibility: "hidden" }}>
              {tech.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default TechLogos;
