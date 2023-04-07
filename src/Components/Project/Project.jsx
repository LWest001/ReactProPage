import {
  Stack,
  Divider,
  Card,
  CardMedia,
  Link,
  CardHeader,
  CardContent,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import MobileViewSwitch from "./MobileViewSwitch";
import "./Project.css";

function Project({ name, image, description, links, icon, video }) {
  const [checked, setChecked] = useState(false);
  function handleChange(e) {
    setChecked(e.target.checked);
  }

  return (
    <Grid className="Project" sx={{ minWidth: "100%" }}>
      <Card raised sx={{ m: "0.5rem 1rem", p: "0.5rem", minWidth: "100%" }}>
        <CardHeader
          avatar={
            <img src={icon} alt={`${name} icon`} className="project-icon" />
          }
          title={name}
        >
          {name}
        </CardHeader>
        <CardContent>
          <MobileViewSwitch checked={checked} handleChange={handleChange} />

          {checked && (
            <CardMedia
              component="video"
              autoPlay={false}
              muted={true}
              loop
              controls
              sx={{ maxHeight: "660px" }}
            >
              <source src={video.mobile} />
            </CardMedia>
          )}

          {!checked && (
            <CardMedia
              component="video"
              autoPlay={false}
              muted={true}
              loop
              controls
            >
              <source src={video.desktop} />
            </CardMedia>
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
