import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import githubIcon from './assets/github-mark-white.png'
import './App.css'
import Button from './components/Button.jsx'
import CVform from './components/CV-form.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
     <h1>Curriculum Maker</h1>
     <div id="github-credits">
         made by NickW16
         <a href="https://github.com/NickW16/CV-Application" target="_blank">
            <img src={githubIcon} className="github-icon"  alt="github" />
            </a>
      </div>
      <div id='main-content'>
         <div id="editing-section">
         </div>
      <CVform />
      </div>
   </>
  )
}

export default App
