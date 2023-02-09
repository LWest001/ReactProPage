import "./App.css";
import Hero from "./Containers/Hero/Hero";
import ProjectsList from "./Containers/ProjectsList/ProjectsList";

function App() {
  return (
    <div className="App">
      <div className="Splash">
        <Hero />
        <div className="nameplate">
          <h1>Leo Westebbe</h1>
          <h2>Front-End Web Developer</h2>
        </div>
      </div>
      <ProjectsList />
    </div>
  );
}

export default App;
