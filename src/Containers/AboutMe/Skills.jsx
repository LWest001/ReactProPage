import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  Stack,
} from "@mui/material";
import { useContext } from "react";
import { LogosContext } from "../../App";
import CustomSkill from "./CustomSkill";
import DataStructuresIcon from "@mui/icons-material/AccountTreeOutlined";
import AlgorithmsIcon from "@mui/icons-material/CalculateOutlined";
import OOPIcon from "@mui/icons-material/DataObjectOutlined";
import FrontEndIcon from "@mui/icons-material/StorefrontOutlined";
import BackEndIcon from "@mui/icons-material/CloudOutlined";

export default function Skills() {
  const techLogos = useContext(LogosContext);
  return (
    <Card variant="grid">
      <CardHeader title=<Typography variant="h3">Skills</Typography> />
      <CardContent sx={{ textAlign: "left" }}>
        <Grid container spacing={1}>
          {techLogos.map((tech) => {
            const techName = tech.name;
            return (
              <Grid
                item
                xs={6}
                sm={3}
                component={Stack}
                gap={1}
                alignItems="center"
                key={`skills${tech.name}`}
                alt={tech.name}
              >
                <img height="40" src={tech.logo} />
                <Typography>{techName}</Typography>
              </Grid>
            );
          })}
          <CustomSkill
            icon=<Avatar variant="square" sx={{ height: 40, bgcolor: "black" }}>
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
          <CustomSkill icon=<OOPIcon sx={{ fontSize: "40px" }} /> name="OOP" />
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
  );
}
