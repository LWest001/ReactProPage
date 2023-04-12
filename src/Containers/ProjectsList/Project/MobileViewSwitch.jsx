import { FormControlLabel, Switch } from "@mui/material";

export default function MobileViewSwitch({ handleChange, checked }) {
  return (
    <FormControlLabel
      control={<Switch checked={checked} onChange={handleChange} />}
      label="Mobile preview"
      sx={{ mr: "100%", width: "max-content" }}
    />
  );
}
