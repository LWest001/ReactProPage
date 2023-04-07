import AppsIcon from "@mui/icons-material/Apps";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";

function FixedBottomNavigation() {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} href='#'/>
        <BottomNavigationAction label="About Me" icon={<PersonIcon />} />
        <BottomNavigationAction label="Projects" icon={<AppsIcon />} href='#ProjectsList'/>
        <BottomNavigationAction label="Get in touch" icon={<EmailIcon />} />
      </BottomNavigation>
    </Paper>
  );
}

export default FixedBottomNavigation;