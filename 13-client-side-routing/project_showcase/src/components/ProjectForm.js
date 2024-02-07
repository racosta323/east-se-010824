import { useState } from "react"

//useNavigate takes submitted data up to parent; use function to navigate to route
import {useOutletContext, useNavigate } from "react-router-dom"

const initialState = {
    name: "",
    about: "",
    phase: "",
    link: "",
    image: ""
}

//we don't get props anymore since it's a child now
function ProjectForm() {
    const [ formData, setFormData ] = useState(initialState)

    //from Project List, destructured
    const { onAddProject } = useOutletContext()
    const navigate = useNavigate()

    function handleChange(event) {
        const { name, value } = event.target
        setFormData((currentFormData) => {
            return {
                ...currentFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        // POST request to persist
        fetch('http://localhost:3001/projects', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((resp) => resp.json())
        .then((newProject) => {
            onAddProject(newProject)
            setFormData(initialState)
            //give navigate a path you want to go; use function to navigate to route; navigates automatically (user won't see link)
            navigate('/projects')
        })
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input 
                id='name' 
                name='name' 
                placeholder='Project Name'
                value={formData.name}
                onChange={handleChange}
            />
            <label htmlFor='about'>About:</label>
            <input 
                id='about' 
                name='about' 
                placeholder='Project About' 
                value={formData.about}
                onChange={handleChange}
            />
            <label htmlFor='phase'>Phase:</label>
            <input 
                id='phase' 
                name='phase'
                type='number' 
                placeholder='Project Phase' 
                value={formData.phase}
                onChange={handleChange}
            />
            <label htmlFor='link'>Link:</label>
            <input 
                id='link' 
                name='link' 
                placeholder='Project Link' 
                value={formData.link}
                onChange={handleChange}
            />
            <label htmlFor='image'>Image:</label>
            <input 
                id='image' 
                name='image' 
                placeholder='Project Image' 
                value={formData.image}
                onChange={handleChange}
            />
            <button type='submit'>Add Project</button>
        </form>
    )
}

export default ProjectForm;