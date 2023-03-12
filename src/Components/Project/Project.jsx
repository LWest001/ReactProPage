import { Stack, Divider, Card, CardMedia, Link } from "@mui/material";
import "./Project.css";

function Project({ name, image, description, links, icon }) {
  return (
    <Card className={`Project`} sx={{ margin: "0.5rem 1rem" }}>
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
        sx={{
          height: "2rem",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems:"center",
          gap: "1rem",
          backgroundColor: "aliceblue",
        }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        className="project-links"
      >
        <Link href={links.hosted}>Visit on the web</Link>
        <Link href={links.repo}>GitHub repository</Link>
      </Stack>
    </Card>
  );
}

export default Project;
