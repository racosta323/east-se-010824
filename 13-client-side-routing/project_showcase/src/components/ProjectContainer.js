import { useState, useEffect } from "react"

import ProjectForm from "./ProjectForm"
import ProjectsList from "./ProjectsList"

//import outlet component
import { Outlet } from "react-router-dom"

function ProjectContainer() {
    const [ projects, setProjects ] = useState([])
    

    useEffect(() => {
        fetch('http://localhost:3001/projects')
        .then((resp) => resp.json())
        .then((data) => setProjects(data))
    }, [])

    function onAddProject(newProject) {
        setProjects((currentProjects) => {
            return [...currentProjects, newProject]
        })
    }

//create context here; information to pass to child components
const context = {
    projects: projects,
    onAddProject: onAddProject
}

    return (
        <div>
            {/* <ProjectForm onAddProject={onAddProject}/>
            <ProjectsList projects={projects} /> */}
            {/* replace the form and list with Outlet */}
            {/* need to also provide context since we no longer have access to the component */}
            <Outlet context={context}/>
        </div>
    )
}

export default ProjectContainer