import "./ProjectsList.css";
import Project from "../../Components/Project/Project";
import projectsData from "./projectsData";

function ProjectsList() {
  const projects = projectsData.map((project) => {
    return (
      <Project
        name={project.name}
        image={project.image}
        description={project.description}
        links={project.links}
        icon={project?.icon}
        key={project.name}
      />
    );
  });
  return (
    <section className="ProjectsList" id="ProjectsList">
      <h2>Projects</h2>
      {projects}
    </section>
  );
}

export default ProjectsList;
