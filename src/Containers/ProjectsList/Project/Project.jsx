import {
  Stack,
  Card,
  CardMedia,
  Link,
  CardHeader,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";
import MobileViewSwitch from "./MobileViewSwitch";
import "./Project.css";

function Project({ name, fallback, description, links, icon, video }) {
  const [checked, setChecked] = useState(
    window.innerWidth < 600 ? true : false
  );
  function handleChange(e) {
    setChecked(e.target.checked);
  }
  let paragraphs = description.map((paragraph, i) => {
    return (
      <Typography textAlign="left" my={1} key={`${name}${i}`}>
        {paragraph}
      </Typography>
    );
  });

  return (
    <Card raised>
      <CardHeader
        avatar={
          <img src={icon} alt={`${name} icon`} className="project-icon" />
        }
        title={name}
      >
        {name}
      </CardHeader>
      <CardContent>
        {video.mobile && (
          <MobileViewSwitch checked={checked} handleChange={handleChange} />
        )}

        {checked && (
          <CardMedia
            component="video"
            autoPlay
            muted={true}
            loop
            playsInline
            sx={{ maxHeight: "660px" }}
          >
            <source src={video.mobile} />
            <img src={fallback?.mobile} alt={`Screenshot of ${name}`} />
          </CardMedia>
        )}

        {!checked && (
          <CardMedia
            component="video"
            autoPlay
            muted={true}
            loop
            playsInline
            sx={{ maxWidth: "776px", margin: "auto" }}
          >
            <source src={video.desktop} />
            <img src={fallback?.desktop} alt={`Screenshot of ${name}`} />
          </CardMedia>
        )}

        {paragraphs}
      </CardContent>
      <Stack
      p={2}
        sx={{
          width: "100%",
          height: "fit-content",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: "1rem",
          backgroundColor: "aliceblue",
        }}
        direction="row"
        // divider={<Divider orientation="vertical" flexItem />}
        className="project-links"
      >
        {links.hosted && (
          <Button component={Link} variant="contained" href={links.hosted} >
            On the web
          </Button>
        )}
        {links.demo && (
          <Button component={Link} variant="contained" href={links.demo}>
            Demo version
          </Button>
        )}
        {links.repo && (
          <Button component={Link} variant="contained" href={links.repo}>
            GitHub repo
          </Button>
        )}
        {links.presentation && (
          <Button
            component={Link}
            variant="contained"
            href={links.presentation}
          >
            Conference presentation
          </Button>
        )}
      </Stack>
    </Card>
  );
}

export default Project;
