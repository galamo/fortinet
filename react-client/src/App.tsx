import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Colors } from "./components/ui-components/Header"
import ResizeComponent from "./components/ui-components/Resize"
import { Countries } from "./components/countries"
import { Login } from './components/login-ref';
// import { Login } from './components/login';
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Users } from './components/users';
import { Register } from './components/register';
import { Home } from './components/home';
import { NotFound } from './components/notFound';


const routes = [
  {
    path: "/",
    element: <Home />,
    text: "home",
    // isVisible>?
    // protected
  },
  {
    path: "/login",
    element: <Login />,
    text: "login",
    // isVisible>?
    // protected
  },
  {
    path: "/countries",
    element: <Countries />,
    text: "countries",
    // isVisible>?
    // protected
  },
  {
    path: "/resize",
    element: <ResizeComponent />,
    text: "resize-test",
    // isVisible>?
    // protected
  },
  {
    path: "*",
    element: <NotFound />,
    text: "not-found"
    // isVisible>?
    // protected
  }
]

type IRoute = typeof routes[0]


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
        <BrowserRouter>
          {/* <Routes>
            {routes.map((route: IRoute) => {
              return <Route key={route.text} path={route.path} element={route.element} />
            })}
          </Routes> */}
          {/* <Login />
          {showResizeComponent ? <ResizeComponent /> : null}
          <Countries /> */}
        </BrowserRouter>
      </div>
    </div >
  );
}

export default App;

