//to get the id from the path (slug)
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function ProjectDetails(){

    //destructure -- only has id
    const { id } = useParams()
    //need a piece of state to display
    const [project, setProject] = useState(null)

    useEffect(()=>{
        fetch(`http://localhost:3001/projects/${id}`)
        .then((resp)=>{resp.json()})
        .then(data=>setProject(data))
        //handle errors; if we don't get a project back, e.g.
        .catch(error=>console.log(error))
    },[])

    if(!project) return <>Loading...</>

    return(
        <div>
            <h2>{ project.name }</h2>
            <p>{ project.about }</p>
            <img src={project.image} alt={project.name}/>
        </div>
    )
}

export default ProjectDetails