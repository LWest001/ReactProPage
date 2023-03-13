import "./App.css";
import Hero from "./Containers/Hero/Hero";
import ProjectsList from "./Containers/ProjectsList/ProjectsList";
import {
  Container,
  Typography,
  Box,
  useMediaQuery,
  IconButton,
  Menu,
} from "@mui/material";
import FixedBottomNavigation from "./Components/FixedBottomNavigation";
import PermanentDrawerNav from "./Components/PermanentDrawerNav";
import { useState, useEffect } from "react";
import { ChevronRight } from "@mui/icons-material";

function App() {
  const [open, setOpen] = useState(true);
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  useEffect(() => {
    isMediumScreen && setOpen(false);
    !isMediumScreen && setOpen(true);
  }, [isMediumScreen]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Container
      className="App"
      disableGutters
      sx={{ display: "flex", flexDirection: "column" }}
    >
      {isMediumScreen && (
        <Box position="fixed" sx={{ left: "0", height: "100vh", width: 20 }}>
          <IconButton
            color="inherit"
            size="small"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            // edge="start"
            sx={{
              mt: 2,
              ...(open && { display: "none" }),
              ":hover": {
                bgcolor: "black",
                color: "white",
              },
            }}
          >
            <ChevronRight />
          </IconButton>
        </Box>
      )}
      <PermanentDrawerNav
        open={open}
        setOpen={setOpen}
        isMediumScreen={isMediumScreen}
      />
      <Box
        sx={{
          flexGrow: 1,
          ml: open ? 20 : 0,
          transition: "margin-left .2s",
        }}
      >
        <Box className="Splash" sx={{ mt: 5, height: "100vh" }}>
          <Hero />
          <Box className="nameplate">
            <Typography variant="h1">Leo Westebbe</Typography>
            <Typography variant="h2">Web Developer</Typography>
          </Box>
        </Box>
        <ProjectsList />
      </Box>
      {/* <FixedBottomNavigation /> */}
    </Container>
  );
}

export default App;
