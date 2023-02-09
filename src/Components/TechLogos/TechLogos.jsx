import HTMLLogo from "../../assets/HTML.svg";
import CSSLogo from "../../assets/CSS.svg";
import JavaScriptLogo from "../../assets/JavaScript.svg";
import ViteLogo from "../../assets/Vite.svg";
import ReactjsLogo from "../../assets/React.svg";
import JestLogo from "../../assets/Jest.svg";
import ReduxLogo from "../../assets/Redux.svg";
import GitLogo from "../../assets/Git.svg";
import GitHubLogo from "../../assets/GitHub.svg";
import MochaLogo from "../../assets/Mocha.svg";
import npmLogo from "../../assets/npm.svg";
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
    HTMLLogo,
    CSSLogo,
    JavaScriptLogo,
    ReactjsLogo,
    ReduxLogo,
    ViteLogo,
    JestLogo,
    MochaLogo,
    GitLogo,
    GitHubLogo,
    npmLogo,
  ];
  const regex = /(?<=assets\/)\w*/;

  return (
    <div className="TechLogos">
      {technologiesArray.map((tech) => {
        const techName = tech.match(regex)[0];
        return (
          <div className={`logoContainer ${techName}`} key={techName}>
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
