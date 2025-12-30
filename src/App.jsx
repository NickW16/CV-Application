import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button.jsx'
import CVform from './components/CV-form.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
      <h1>CV Application</h1>
      <div id='main-content'>
         <div id="editing-section">
            <div id="buttons">
               <Button text="General" />
               <Button text="Education" />
               <Button text="Experience" />
            </div>
        
         </div>
      <CVform />
         <div id="cv-section">
            <h2>Curriculum:</h2>
         </div>
      </div>
   </>
  )
}

export default App
