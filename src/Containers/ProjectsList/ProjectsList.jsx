import Project from "./Project/Project";
import projectsData from "./projectsData";
import { Stack } from "@mui/material";

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
        video={project.video || null}
      />
    );
  });
  return (
    <Stack
      className="ProjectsList"
      id="ProjectsList"
      gap={2}
      direction="column"
    >
      {projects}
    </Stack>
  );
}

export default ProjectsList;
