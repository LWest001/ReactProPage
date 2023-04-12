import { Grid } from "@mui/material";

import Skills from "./Skills";
import Resume from "./Resume";
import Profile from "./Profile";

export default function AboutMe() {
  return (
    <Grid container direction="row" alignItems="stretch">
      <Grid item xs={12}>
        <Skills />
      </Grid>

      <Grid item xs={12} sm={5}>
        <Resume />
      </Grid>

      <Grid item xs={12} sm={7}>
        <Profile />
      </Grid>
    </Grid>
  );
}
