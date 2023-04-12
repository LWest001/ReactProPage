import { Grid, Stack } from "@mui/material";

export default function CustomSkill({ icon, name }) {
  return (
    <Grid
      item
      xs={6}
      sm={3}
      component={Stack}
      direction="row"
      gap={1}
      alignItems="center"
    >
      {icon}
      {name}
    </Grid>
  );
}
