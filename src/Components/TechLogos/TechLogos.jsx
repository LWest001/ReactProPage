import HTML from "../../assets/HTML.svg";
import CSS from "../../assets/CSS.svg";
import JavaScript from "../../assets/JavaScript.svg";
import Vite from "../../assets/Vite.svg";
import Reactjs from "../../assets/React.svg";
import Jest from "../../assets/Jest.svg";
import Redux from "../../assets/Redux.svg";
import Git from "../../assets/Git.svg";
import GitHub from "../../assets/GitHub.svg";
import Mocha from "../../assets/Mocha.svg";
import npm from "../../assets/npm.svg";
import "./TechLogos.css";

function TechLogos() {
  const handleOnMouseOver = (e) => {
    const className = e.target.className;
    document.querySelector(`p.logo.${className}`).style.visibility = "visible";
  };

  const handleOnMouseLeave = (e) => {
    const className = e.target.className;
    document.querySelector(`p.logo.${className}`).style.visibility = "hidden";
  };

  const technologiesArray = [
    { HTML },
    { CSS },
    { JavaScript },
    { Reactjs },
    { Redux },
    { Vite },
    { Jest },
    { Mocha },
    { Git },
    { GitHub },
    { npm },
  ];

  return (
    <div className="TechLogos">
      {technologiesArray.map((tech) => {
        const techName = Object.keys(tech)[0];
        return (
          <div className={`logoContainer ${techName} bounce`} key={techName}>
            <img
              src={tech[techName]}
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
