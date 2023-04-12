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
import { useState, useEffect, createContext } from "react";
import { ChevronRight } from "@mui/icons-material";
import AboutMe from "./Containers/AboutMe/AboutMe";
import Contact from "./Containers/Contact/Contact";
import HTML from "./assets/TechLogos/HTML.svg";
import CSS from "./assets/TechLogos/CSS.svg";
import JavaScript from "./assets/TechLogos/JavaScript.svg";
import Node from "./assets/TechLogos/Node.svg";
import Vite from "./assets/TechLogos/Vite.svg";
import Reactjs from "./assets/TechLogos/React.svg";
import MaterialUI from "./assets/TechLogos/MaterialUI.svg";
import Jest from "./assets/TechLogos/Jest.svg";
import Redux from "./assets/TechLogos/Redux.svg";
import Git from "./assets/TechLogos/Git.svg";
import GitHub from "./assets/TechLogos/GitHub.svg";
import Mocha from "./assets/TechLogos/Mocha.svg";
import npm from "./assets/TechLogos/npm.svg";
import Java from "./assets/TechLogos/Java.svg";
import Python from "./assets/TechLogos/Python.svg";
import Netlify from "./assets/TechLogos/Netlify.svg";

export const LogosContext = createContext();

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
      sx={{ display: "flex", flexDirection: "column", maxWidth: "1000px" }}
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
        <LogosContext.Provider
          value={[
            { HTML },
            { CSS },
            { JavaScript },
            { Reactjs },
            { Git },
            { Node },
            { Vite },
            { MaterialUI },
            { Jest },
            { Redux },
            { GitHub },
            { Mocha },
            { npm },
            { Java },
            { Python },
            { Netlify },
          ].map((tech) => {
            return { logo: Object.values(tech), name: Object.keys(tech) };
          })}
        >
          <Box className="Splash" sx={{ height: "100vh" }}>
            <Hero />
            <Box className="nameplate">
              <Typography variant="h1">Leo Westebbe</Typography>
              <Typography variant="h2">Web Developer</Typography>
            </Box>
          </Box>
          <Typography
            className="sectionHeader"
            id="about-me"
            variant="h2"
            mb={2}
          >
            About Me
          </Typography>
          <AboutMe />
        </LogosContext.Provider>

        <Typography className="sectionHeader" id="projects" variant="h2" mb={2}>
          Projects
        </Typography>
        <ProjectsList />

        <Typography className="sectionHeader" id="contact" variant="h2" mb={2}>
          Contact
        </Typography>
        <Contact />
      </Box>
      {/* <FixedBottomNavigation /> */}
    </Container>
  );
}

export default App;
