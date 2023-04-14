import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export default function Profile() {
  return (
    <Card variant="grid" sx={{ height: ["inherit", "88.5%"] }}>
      <CardHeader title={<Typography variant="h3">Profile</Typography>} />
      <CardContent sx={{ textAlign: "left" }}>
        <Typography>
          Breaking into the field of web development with enthusiasm for
          UI-building using modern libraries such as React. Recent college
          graduate with a concentration in neuroscience research leveraging web
          technologies including JavaScript. A decade of experience as a highly
          promotable worker, an effective leader, and a hands-on mentor and
          training professional.
        </Typography>
      </CardContent>
    </Card>
  );
}
