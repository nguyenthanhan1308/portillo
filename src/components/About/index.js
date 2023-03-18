import "./About.css";
export default function About () {
    return (
        <div id="about" className="about-container display_col center">
            <p className="about-welcome">WELCOME TO MY PORTILLO</p>
            <h3 className="sub-color">Hello, I'm Suns</h3>
            <h2 className="primary-color">A Front-end Developer</h2>
            <p className="about-me">
                Fond of optimizing front-end and learning new things.
            </p>
            <div className="display_row about-nav">
                <a href="https://github.com/nguyenthanhan1308" target="_blank" rel="noreferrer">
                    <img src="github.png" alt="githubLogo" />
                </a>
            </div>
        </div>
    )
}