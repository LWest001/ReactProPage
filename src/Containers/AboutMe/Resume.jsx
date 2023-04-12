import ResumeIcon from "@mui/icons-material/DescriptionOutlined";

import resume from "../../assets/Leo_Westebbe_Resume.pdf";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
export default function Resume() {
  return (
    <Card variant="grid">
      <CardHeader title=<Typography variant="h3">Resume</Typography> />
      <CardContent sx={{ p: "12px !important" }}>
        <Button
          component="a"
          variant="outlined"
          href={resume}
          sx={{ p: 0, "&:hover": { color: "black" } }}
        >
          <ResumeIcon sx={{ fontSize: ["150px", "180px", null, "200px"] }} />
        </Button>
      </CardContent>
    </Card>
  );
}
