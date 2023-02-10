import "./Project.css";

function Project({ name, image, description, links, icon }) {
  return (
    <div className={`Project`}>
      <h3 className="project-header">
        <img src={icon} alt={`${name} icon`} className="project-icon" />
        {name}
      </h3>
      <img
        src={image}
        alt={`Screenshot of the project called ${name}`}
        className="project-image"
      />
      <p className="project-description">{description}</p>
      <div className="project-links">
        <p className="hosted-link button">
          <a href={links.hosted}>Visit on the web</a>
        </p>
        <p className="repo-link button">
          <a href={links.repo}>GitHub repository</a>
        </p>
      </div>
    </div>
  );
}

export default Project;
