import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Sidenav from "./components/Sidenav";
import Training from "./components/Training";

function App() {
  return (
    <div>
      <Sidenav />
      <Home />
      <Training />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
