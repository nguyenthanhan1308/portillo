import { projectsData } from "../../data/Projects";
import "./Project.css";
export default function Project() {
    return (
        <div className="display_col center gap2">
            <h2 className="primary-color">PROJECTS</h2>
            <div className="display_row wrap gap2 center">
                {projectsData.map((project,i) => {
                    return(
                        <div key={i} className="project-card display_col wrap center">
                            <img src={project?.thumb} alt={`project-thumb-${i}`} className="project-thumb" />
                            <a target="_blank" rel="noreferrer" href={project?.url} className="project-nav">{project.name}</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}