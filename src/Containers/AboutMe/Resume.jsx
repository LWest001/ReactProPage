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
    <Card variant="grid" sx={{ height: ["inherit", "88.5%"] }}>
      <CardHeader title={<Typography variant="h3">Resume</Typography>} />
      <CardContent
        sx={{
          display: "flex",
        }}
      >
        <Button
          component="a"
          variant="outlined"
          href={resume}
          sx={{
            p: [1, 0],
            flexDirection: ["row", "column"],
            "&:hover": { color: "#13589d" },
          }}
        >
          <ResumeIcon sx={{ fontSize: ["50px", "180px", null, "200px"] }} />
          <Typography fontSize={24}>View resume</Typography>
        </Button>
      </CardContent>
    </Card>
  );
}
