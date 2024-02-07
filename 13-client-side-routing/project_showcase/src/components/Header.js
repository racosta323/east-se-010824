import {useEffect} from "react"
//import navlinks
import { NavLink } from "react-router-dom"

function Header({ darkMode, onDarkModeToggle }) {
    const handleModeClick = () => onDarkModeToggle()
    const buttonText = darkMode ? "Light Mode" : "Dark Mode"
    
    return (
        <header>
            <h1>
                <span className="logo">{"//"}</span>
                Project Showcase
            </h1>
            <nav>
                {/* adds links by way of NavLink; give it to prop to go directly to that route*/}
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/projects/new">New Project</NavLink>
            </nav>
            <button onClick={handleModeClick}>{ buttonText }</button>
        </header>
    )
}

export default Header;