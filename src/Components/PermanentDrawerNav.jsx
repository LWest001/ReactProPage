import {
  Drawer,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  CssBaseline,
  Paper
} from "@mui/material";
import {
  ChevronLeft,
  Apps,
  Person,
  Email,
  Home,
  Menu,
} from "@mui/icons-material";

import styled from "@emotion/styled";

function PermanentDrawerNav({ open, setOpen, isMediumScreen }) {
  

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuItems = [
    { name: "Home", icon: <Home />, section: "#" },
    { name: "About Me", icon: <Person />, section: "#about-me" },
    { name: "Projects", icon: <Apps />, section: "#ProjectsList" },
    { name: "Contact", icon: <Email />, section: "#contact" },
  ];

  const variant = isMediumScreen ? "persistent" : "permanent";

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  return (
    <Box id="menuButton"sx={{ display: "flex", position: "fixed" }}>
      <CssBaseline />
      

      <Drawer variant={variant} anchor="left" open={open}>
        {isMediumScreen && (
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeft />
            </IconButton>
          </DrawerHeader>
        )}
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
