import { useState } from 'react'
import './App.css'
import Discover from './discover'

function App() {


  function refreshPage () {
    window.location.reload()
  }

  return (
    <div className='container'>
      <div className='mainPage'>
        <h1>Trippin' On Cats</h1>
        <h3>discover cats from your wildest dreams!</h3>
        <br></br>
        <br></br>
        <div className='discoverContainer'>
          <Discover />
          <button onClick={ refreshPage } className='discoverButton'>Discover</button>
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
