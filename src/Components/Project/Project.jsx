import {
  Stack,
  Divider,
  Card,
  CardMedia,
  Link,
  Typography,
  CardHeader,
  CardContent,
  Grid,
} from "@mui/material";
import "./Project.css";

function Project({ name, image, description, links, icon, video }) {
  return (
    <Grid>
      <Card className={`Project`} raised sx={{ m: "0.5rem 1rem", p: "0.5rem" }}>
        <CardHeader
          avatar={
            <img src={icon} alt={`${name} icon`} className="project-icon" />
          }
          title={name}
        >
          {name}
        </CardHeader>
        <CardContent>
          {video ? (
            <CardMedia component="video" autoplay="true" muted="true" loop>
              <source src={video} />
            </CardMedia>
          ) : (
            <img
              src={image}
              alt={`Screenshot of the project called ${name}`}
              className="project-image"
            />
          )}
          <p className="project-description">{description}</p>
        </CardContent>
        <Stack
          sx={{
            height: "2rem",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
    </Grid>
  );
}

export default Project;
