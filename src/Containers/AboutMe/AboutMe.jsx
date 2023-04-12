import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ResumeIcon from "@mui/icons-material/DescriptionOutlined";
import DataStructuresIcon from "@mui/icons-material/AccountTreeOutlined";
import AlgorithmsIcon from "@mui/icons-material/CalculateOutlined";
import OOPIcon from "@mui/icons-material/DataObjectOutlined";
import FrontEndIcon from "@mui/icons-material/StorefrontOutlined";
import BackEndIcon from "@mui/icons-material/CloudOutlined";

import resume from "../../assets/Leo_Westebbe_Resume.pdf";
import { useContext } from "react";
import { LogosContext } from "../../App";
import CustomSkill from "./CustomSkill";

export default function AboutMe() {
  const techLogos = useContext(LogosContext);
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
              <ResumeIcon
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
            <Grid container spacing={1}>
              {techLogos.map((tech) => {
                const techName = tech.name;
                return (
                  <Grid
                    item
                    xs={4}
                    component={Stack}
                    direction="row"
                    gap={1}
                    alignItems="center"
                  >
                    <img height="40" src={tech.logo} />
                    <Typography>{techName}</Typography>
                  </Grid>
                );
              })}
              <CustomSkill
                icon=<Avatar
                  variant="square"
                  sx={{ height: 40, bgcolor: "black" }}
                >
                  Ex
                </Avatar>
                name="Express"
              />

              <CustomSkill
                icon=<DataStructuresIcon sx={{ fontSize: "40px" }} />
                name="Data Structures"
              />
              <CustomSkill
                icon=<AlgorithmsIcon sx={{ fontSize: "40px" }} />
                name="Algorithms"
              />
              <CustomSkill
                icon=<OOPIcon sx={{ fontSize: "40px" }} />
                name="OOP"
              />
              <CustomSkill
                icon=<FrontEndIcon sx={{ fontSize: "40px" }} />
                name="Front End"
              />
              <CustomSkill
                icon=<BackEndIcon sx={{ fontSize: "40px" }} />
                name="Back End"
              />
            </Grid>
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
