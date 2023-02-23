import "./Tech.css";

export default function Tech () {
    return (
        <div className="display_col center">
            <h6>TECH STACKS</h6>
            <div className="display_row full_w center" style={{}}>
                <div className="display_row center">
                    <div className="tech-logo center">
                        <img height={50} width={50} src="js.png" alt="javascriptLogo"/>
                    </div>
                    <span className="tech-name pdh3x">Javascript</span>
                </div>
                <div className="display_row center">
                    <div className="tech-logo center">
                        <img height={50} width={50} src="logo192.png" alt="reactLogo"/>
                    </div>
                    <span className="tech-name pdh3x">ReactJs</span>
                </div>
                <div className="display_row center">
                    <div className="tech-logo center">
                        <img height={50} width={50} src="nextjs.png" alt="reactLogo"/>
                    </div>
                    <span className="tech-name pdh3x">NextJs</span>
                </div>
            </div>
        </div>
    )
}