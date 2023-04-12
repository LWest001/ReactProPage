import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  CssBaseline,
} from "@mui/material";
import { Apps, Person, Email, Home } from "@mui/icons-material";

function PermanentDrawerNav({ open, isMediumScreen }) {
  const menuItems = [
    { name: "Home", icon: <Home />, section: "#" },
    { name: "About Me", icon: <Person />, section: "#about-me" },
    { name: "Projects", icon: <Apps />, section: "#projects" },
    { name: "Contact", icon: <Email />, section: "#contact" },
  ];

  const variant = isMediumScreen ? "persistent" : "permanent";

  return (
    <Box id="menuButton" sx={{ display: "flex", position: "fixed" }}>
      <CssBaseline />

      <Drawer
        variant={variant}
        anchor="left"
        open={open}
        transitionDuration={{ enter: 200, appear: 200, exit: 200 }}
      >
        <Divider sx={{ visibility: isMediumScreen ? "visible" : "hidden" }} />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton href={item.section}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default PermanentDrawerNav;
