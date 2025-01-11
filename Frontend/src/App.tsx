import './App.css'
import Navbar from "./components/Navbar.tsx"
import OpeningScreen from "./components/Opening page.tsx";
import AboutMe from "./components/About Me.tsx";
import Projects from "./components/Projects.tsx";
import Technologies from "./components/Technologies.tsx";
function App() {
  return (
  <main>
    <div className = "App">
      <OpeningScreen></OpeningScreen>
      <AboutMe></AboutMe>
      <Projects></Projects>
    </div>
  </main>
  )
}

export default App
