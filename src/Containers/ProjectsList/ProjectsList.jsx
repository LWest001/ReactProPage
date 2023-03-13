import "./ProjectsList.css";
import Project from "../../Components/Project/Project";
import projectsData from "./projectsData";
import { Typography, Grid } from "@mui/material";
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
      />
    );
  });
  return (
    <Box>
      <Typography variant="h2">Projects</Typography>
      <Grid container spacing={2} className="ProjectsList" id="ProjectsList">
        {projects}
      </Grid>
    </Box>
  );
}

export default ProjectsList;
