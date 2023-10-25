import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    counter = counter + 1
    if(counter<= 20) {
      setCounter(counter)
      console.log("Value Added", counter);
    }
    
  }

  const remval = () => {
    counter = counter - 1
    if(counter >= 0){
    setCounter(counter)
    console.log("Value decreased", counter);
    } 
  }

  return (
   <>
    <h1> Chai Aur React</h1>
    <h2> Counter value : {counter}</h2>

    <button
      onClick={addValue}
      >Add Value</button>
    <br/>
    <br/>
    <button
    onClick={remval}
    >Remove Value</button>
   </>
  )
}

export default App
