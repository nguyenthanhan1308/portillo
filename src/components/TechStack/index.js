import "./Tech.css";

export default function Tech () {
    return (
        <div className="display_col center gap2">
            <h2 className="primary-color">SKILLS | TECH STACKS</h2>
            <div className="display_row center gap2 wrap">
                <div className="tech-stack display_row center">
                    <div className="tech-logo center">
                        <img src="js.png" alt="javascriptLogo"/>
                    </div>
                    <p className="tech-name">Javascript</p>
                </div>
                <div className="tech-stack display_row center">
                    <div className="tech-logo center">
                        <img src="logo192.png" alt="reactLogo"/>
                    </div>
                    <p className="tech-name">ReactJs</p>
                </div>
                <div className="tech-stack display_row center">
                    <div className="tech-logo center">
                        <img src="nextjs.png" alt="reactLogo"/>
                    </div>
                    <p className="tech-name">NextJs</p>
                </div>
            </div>
        </div>
    )
}