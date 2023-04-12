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

function Project({ name, fallback, description, links, icon, video }) {
  const [checked, setChecked] = useState(
    window.innerWidth < 600 ? true : false
  );
  function handleChange(e) {
    setChecked(e.target.checked);
  }

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
        <MobileViewSwitch checked={checked} handleChange={handleChange} />

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
          <CardMedia component="video" autoPlay muted={true} loop playsInline>
            <source src={video.desktop} />
            <img src={fallback?.desktop} alt={`Screenshot of ${name}`} />
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
  );
}

export default Project;
