import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import resume from "../../assets/Leo_Westebbe_Resume.pdf";
import TechLogos from "../../Components/TechLogos/TechLogos";

export default function AboutMe() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="stretch"
    >
      <Grid item xs={12} sm={5}>
        <Card variant="grid">
          <CardHeader title=<Typography variant="h3">Resume</Typography> />
          <CardContent sx={{ p: "12px !important" }}>
            <Button
              component="a"
              variant="outlined"
              href={resume}
              sx={{ p: 0, "&:hover": { color: "black" } }}
            >
              <DescriptionOutlinedIcon
                sx={{ fontSize: ["150px", "180px", null, "200px"] }}
              />
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={7}>
        <Card variant="grid">
          <CardHeader title="Skills" />
          <CardContent sx={{ textAlign: "left" }}>
            <Typography>
              JavaScript · React · Redux · Material UI · Node.js · Netlify · Git
              · GitHub · Jest · Mocha · vite · Express · Data Structures ·
              Algorithms · Front-End · Back-End · Microsoft Office · Java ·
              Python · Object-Oriented Programming
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card raised variant="grid">
          <CardHeader title=<Typography variant="h3">Profile</Typography> />
          <CardContent sx={{ textAlign: "left" }}>
            <Typography>
              Breaking into the field of web development with enthusiasm for
              UI-building using modern libraries such as React. Recent college
              graduate with a concentration in neuroscience research leveraging
              web technologies including JavaScript. A decade of experience as a
              highly promotable worker, an effective leader, and a hands-on
              mentor and training professional.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
