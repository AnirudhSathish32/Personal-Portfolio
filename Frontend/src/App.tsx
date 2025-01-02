import { useState } from 'react'
import githubLogo from "./assets/github logo 2.png"
import linkedinLogo from "./assets/LinkedIn_logo_initials.png"
import './App.css'
import {Moon, Sun} from "lucide-react";
import Navbar from "./components/Navbar.tsx"
import OpeningScreen from "./components/Opening page.tsx";
import AboutMe from "./components/About Me.tsx";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Navbar></Navbar>
          <OpeningScreen>
              <a href="https://vite.dev" target="_blank">
                  <img src={githubLogo} className="logo" alt="Linkedin logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                  <img src={linkedinLogo} className="logo react" alt="Github logo" />
              </a>
          </OpeningScreen>
          <AboutMe></AboutMe>
        <a href="https://vite.dev" target="_blank">
          <img src={githubLogo} className="logo" alt="Linkedin logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={linkedinLogo} className="logo react" alt="Github logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
