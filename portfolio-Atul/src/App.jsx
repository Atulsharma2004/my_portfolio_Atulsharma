import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Sidenav from "./components/Sidenav";

function App() {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <Sidenav />
      <Home />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
