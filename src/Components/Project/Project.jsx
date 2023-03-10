import { Stack, Divider } from "@mui/material";
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
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        className="project-links"
      >
        <a href={links.hosted}>Visit on the web</a>
        <a href={links.repo}>GitHub repository</a>
      </Stack>
    </div>
  );
}

export default Project;
