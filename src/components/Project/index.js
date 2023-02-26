import { projectsData } from "../../data/Projects";
import "./Project.css";
export default function Project() {
    return (
        <div className="display_col center">
            <h6>PROJECTS</h6>
            <div className="project-container display_row wrap gap2">
                {projectsData.map((project,i) => {
                    return(
                        <div key={i} className="project-card display_col wrap">
                            <img src={project?.thumb} alt={`project-thumb-${i}`} className="project-thumb" />
                            <h5>{project.name}</h5>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}