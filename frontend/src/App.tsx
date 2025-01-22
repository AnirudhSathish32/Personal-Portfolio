import './App.css'
import OpeningScreen from "./components/Opening page.tsx";
import Technologies from "./components/Technologies.tsx";
import Projects from "./components/Projects.tsx";
import AboutMe from "./components/About Me.tsx";
function App() {
  return (
  <main>
    <div className = "App">
      <OpeningScreen></OpeningScreen>
      <AboutMe></AboutMe>
      <Technologies></Technologies>
      <Projects></Projects>
    </div>
  </main>
  )
}

export default App
