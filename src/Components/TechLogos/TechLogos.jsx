import "./TechLogos.css";
import { useContext } from "react";
import { LogosContext } from "../../App";

function TechLogos() {
  const handleOnMouseOver = (e) => {
    const className = e.target.className;
    document.querySelector(`p.logo.${className}`).style.visibility = "visible";
  };

  const handleOnMouseLeave = (e) => {
    const className = e.target.className;
    document.querySelector(`p.logo.${className}`).style.visibility = "hidden";
  };

  const technologiesArray = useContext(LogosContext);



  return (
    <div className="TechLogos">
      {technologiesArray.map((tech) => {
        const techName = tech.substring(22, tech.length-4);
        return (
          <div className={`logoContainer ${techName} bounce`} key={techName}>
            <img
              src={tech}
              onMouseOver={handleOnMouseOver}
              onMouseLeave={handleOnMouseLeave}
              className={`${techName}`}
              key={techName}
              alt={`${techName} logo`}
            />
            <p className={`logo ${techName}`} style={{ visibility: "hidden" }}>
              {techName}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default TechLogos;
