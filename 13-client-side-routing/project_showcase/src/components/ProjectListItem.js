//using link instead of navlink since we're not linking a navbar
import { Link } from "react-router-dom"

// function ProjectListItem({ project: { name, image, about, id, phase, link } }) {
function ProjectListItem({ project }) {
    const { name, image, about, id, phase, link } = project
    return (
        <li className="card">
            <figure className="image">
                <img src={image} alt={`project: ${name}`}/>
            </figure>
            <article>
                <h4>{name}</h4>
                <Link to={`/project/${id}`}>See Details</Link>
            </article>
        </li>
    )
}

export default ProjectListItem