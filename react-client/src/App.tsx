import React, { Suspense, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Colors } from "./components/ui-components/Header"
import ResizeComponent from "./components/ui-components/Resize"
// import { Countries } from "./components/countries"
import { LoginRef } from './components/login-ref';
// import { Login } from './components/login';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import { ProgressSpinner } from 'primereact/progressspinner';

import { Users } from './components/users';
import { Register } from './components/register';
import { Home } from './components/home';
import { NotFound } from './components/notFound';
import { Button } from 'primereact/button';
import { SpinnerWrapper } from './components/ui-components/SpinnerWrapper';
import Reports from "./components/reports"
import Settings from './components/settings';
import SettingsProvider from './components/providers/settings-provider';
import Footer from './components/Footer';
const LazyCountries = React.lazy(() => import("./components/countries"))
const LazyReports = React.lazy(() => import("./components/reports"))
// step before MF


const routes = [
  {
    path: "/",
    element: <Home />,
    text: "home",
    isVisible: true,
    // protected
  },
  {
    path: "/register",
    element: <Register />,
    text: "register",
    isVisible: true,
    // protected
  },
  {
    path: "/login",
    element: <LoginRef />,
    text: "login",
    isVisible: true,
    // protected
  },
  {
    path: "/countries",
    element: <LazyCountries />,
    text: "countries",
    isVisible: true,
    // protected
  },
  {
    path: "/resize",
    element: <ResizeComponent />,
    text: "resize-test",
    isVisible: true,
    // protected
  },
  {
    path: "/reports",
    element: <LazyReports />,
    text: "reports",
    isVisible: true,
    // protected
  },
  {
    path: "/settings",
    element: <Settings />,
    text: "settings",
    isVisible: true,
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




  // console.log("same like useeffect without second param")
  // useEffect
  // 1. side effect
  // 2. work with the DOM
  // 3. ajax requests

  // useEffect(() => { This Code will Run }) => Update, on every setState
  // useEffect(() => { This Code will Run }, []) => Mount  
  // useEffect(() => { This Code will Run }, [param]) => When param is getting updated 
  // useEffect(() => { return Cleanup() will run }, [param]) => When param is getting updated OR destroy
  return (
    <div className="App">
      <div>
        <SettingsProvider>
          <BrowserRouter>
            <NavigationBar routes={routes} />
            <Suspense fallback={<ProgressSpinner />}>
              <Routes>
                {routes.map((route: IRoute) => {
                  return <Route key={route.text} path={route.path} element={route.element} />
                })}
              </Routes>
              <Footer />
            </Suspense>

          </BrowserRouter>
        </SettingsProvider>
      </div>
    </div >
  );
}


function NavigationBar(props: { routes: Array<IRoute> }) {
  return <div className={"navigation-bar"}>
    {props.routes.filter((route: IRoute) => route.isVisible).map((route: IRoute) => {
      return <div key={route.text} ><Link to={route.path}><Button label={route.text} /></Link></div>
    })}
  </div >
}

export default App;

