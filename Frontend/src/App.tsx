import { useState } from 'react'
import githubLogo from "./assets/github logo 2.png"
import linkedinLogo from "./assets/LinkedIn_logo_initials.png"
import './App.css'
import {Moon, Sun} from "lucide-react";
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
