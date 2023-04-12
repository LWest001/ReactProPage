import AppsIcon from "@mui/icons-material/Apps";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";

function FixedBottomNavigation() {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: "10000" }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} href="#" />
        <BottomNavigationAction
          label="About Me"
          icon={<PersonIcon />}
          href="#about-me"
        />
        <BottomNavigationAction
          label="Projects"
          icon={<AppsIcon />}
          href="#projects"
        />
        <BottomNavigationAction
          label="Contact"
          icon={<EmailIcon />}
          href="#contact"
        />
      </BottomNavigation>
    </Paper>
  );
}

export default FixedBottomNavigation;
