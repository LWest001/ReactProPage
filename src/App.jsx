import "./App.css";
import Hero from "./Containers/Hero/Hero";
import ProjectsList from "./Containers/ProjectsList/ProjectsList";
import { Container, Typography, ThemeProvider } from "@mui/material";
import theme from "./assets/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container className="App">
        <div className="Splash">
          <Hero />
          <div className="nameplate">
            <Typography variant="h1">Leo Westebbe</Typography>
            <Typography variant="h2">Front-End Web Developer</Typography>
          </div>
        </div>
        <ProjectsList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
