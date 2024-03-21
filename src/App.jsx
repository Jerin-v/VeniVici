import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Discover from './discover'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div className='mainPage'>
        <h1>Trippin' On Cats</h1>
        <h3>discover cats from your wildest dreams!</h3>
        <br></br>
        <br></br>
        <div className='discoverContainer'>
          <Discover />
          <button className='discoverButton'>Discover</button>
        </div>
        
      </div>

      <div className='sideBar'>
        <div className='banList'>
          <h3>Ban List</h3>

        </div>

      </div>
    </div>
  )
}

export default App
