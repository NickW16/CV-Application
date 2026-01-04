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
     <div id="title-and-icon">
         <h1>Curriculum Maker</h1>
         <img src={githubIcon} className="github-icon"  alt="github" />
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
