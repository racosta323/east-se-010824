import { useState } from "react"

import Header from "./components/Header"
import ProjectContainer from "./components/ProjectContainer"

//import outlet component from reactrouterdom to import children
import { Outlet } from "react-router-dom"

function App() {
  const [ darkMode, setDarkMode ] = useState(true)

  function onDarkModeToggle() {
    setDarkMode(!darkMode)
  }

  const className = darkMode ? 'App' : 'App light'

  return <div className={className}>
    <Header darkMode={darkMode} onDarkModeToggle={onDarkModeToggle}/> 
    {/* render child routes here */}
    <Outlet />
    {/* <ProjectContainer /> */}
  </div>;
}

export default App;
