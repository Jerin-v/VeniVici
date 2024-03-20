import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  async function callAPI() {

    try {
    const response = await fetch("https://api.harvardartmuseums.org/object?apikey=727f9bec-11ef-4988-ae72-f65ab031a8f1&size=50")
    if(!response.ok) {
      throw new Error("Could not fetch resource")
    }
    const data = await response.json()
    console.log(data)
    }
    catch (error){
      console.error(error)
    }
  }
  callAPI()

  return (
    <div className='container'>
      <div className='mainPage'>
        <h1>Museum</h1>
        <h3>discover art pieces from the Harvard Art Museum!</h3>
        <br></br>
        <br></br>
        <button className='discover'>Discover</button>
        
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
