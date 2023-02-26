import "./Tech.css";

export default function Tech () {
    return (
        <div className="tech-container display_col center">
            <h4 className="primary-color">SKILLS | TECH STACKS</h4>
            <div className="display_row center gap2 wrap">
                <div className="tech-stack display_row center">
                    <div className="tech-logo center">
                        <img src="js.png" alt="javascriptLogo"/>
                    </div>
                    <span className="tech-name">Javascript</span>
                </div>
                <div className="tech-stack display_row center">
                    <div className="tech-logo center">
                        <img src="logo192.png" alt="reactLogo"/>
                    </div>
                    <span className="tech-name">ReactJs</span>
                </div>
                <div className="tech-stack display_row center">
                    <div className="tech-logo center">
                        <img src="nextjs.png" alt="reactLogo"/>
                    </div>
                    <span className="tech-name">NextJs</span>
                </div>
            </div>
        </div>
    )
}