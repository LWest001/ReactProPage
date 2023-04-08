import Project from "../../Components/Project/Project";
import projectsData from "./projectsData";
import { Typography, Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";

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
      container
      className="ProjectsList"
      id="ProjectsList"
      gap={2}
      flexDirection="column"
    >
      {projects}
    </Stack>
  );
}

export default ProjectsList;
