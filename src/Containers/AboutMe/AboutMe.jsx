import {
  Card,
  CardContent,
  CardHeader,
  Link,
  Stack,
  Typography,
} from "@mui/material";

import resume from "../../assets/Leo_Westebbe_Resume.pdf";

export default function AboutMe() {
  return (
    <Stack direction="column" gap={2}>
      <Card raised>
        <CardHeader title="Profile" />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography>
            Breaking into the field of web development with enthusiasm for
            UI-building using modern libraries such as React. Recent college
            graduate with a concentration in neuroscience research leveraging
            web technologies including JavaScript. A decade of experience as a
            highly promotable worker, an effective leader, and a hands-on mentor
            and training professional.
          </Typography>
          <Typography mt={2}>
            <Link variant="button" href={resume}>Professional Resume</Link>
          </Typography>
        </CardContent>
      </Card>
      <Card raised>
        <CardHeader title="Skills" />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography>
            JavaScript · React · Redux · Material UI · Node.js · Netlify · Git ·
            GitHub · Jest · Mocha · vite · Express · Data Structures ·
            Algorithms · Front-End · Back-End · Microsoft Office · Java · Python
            · Object-Oriented Programming
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}
