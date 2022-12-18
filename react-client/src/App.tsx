import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Colors } from "./components/ui-components/Header"
import ResizeComponent from "./components/ui-components/Resize"
import { Countries } from "./components/countries"
import { Login } from './components/login';
import { Users } from './components/users';
import { Register } from './components/register';
function App() {
  console.log("App component")
  const [color, setColor] = useState(Colors.blue)
  const [counter, setCounter] = useState(1)



  // console.log("same like useeffect without second param")
  // useEffect
  // 1. side effect
  // 2. work with the DOM
  // 3. ajax requests

  // useEffect(() => { This Code will Run }) => Update, on every setState
  // useEffect(() => { This Code will Run }, []) => Mount  
  // useEffect(() => { This Code will Run }, [param]) => When param is getting updated 
  // useEffect(() => { return Cleanup() will run }, [param]) => When param is getting updated OR destroy

  useEffect(() => {
    return () => {
      console.log("cleanUp Function")
    }
  }, [counter])
  const showResizeComponent = counter % 2 === 0
  return (
    <div className="App">
      <div>

        <button onClick={() => { setCounter(counter + 1) }}> Incerase Number </button>
        <button onClick={() => { setColor(Colors.yellow) }}> Yellow </button>
        <button onClick={() => { setColor(Colors.red) }}> Red </button>
        {counter}
        <Register />
        {showResizeComponent ? <ResizeComponent /> : null}
        <Header text={"Countries App"} color={color} />

        <Countries />

      </div>
    </div >
  );
}

export default App;

