import {
  Stack,
  Divider,
  Card,
  CardMedia,
  Link,
  CardHeader,
  CardContent,
  Typography,
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
        {links.hosted && <Link href={links.hosted}>Visit on the web</Link>}
        {links.demo && <Link href={links.demo}>Demo version</Link>}
        {links.repo && <Link href={links.repo}>GitHub repository</Link>}
        {links.presentation && (
          <Link href={links.presentation}>Conference presentation</Link>
        )}
      </Stack>
    </Card>
  );
}

export default Project;
