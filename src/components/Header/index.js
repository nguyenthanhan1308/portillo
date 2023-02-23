import "./Header.css";

export default function Header () {
    return (
        <div className="header-container">
            <div className="header-logo"></div>
            <div className="header-nav" style={{display: "flex", gap:"1em"}}>
                <a className="nav-link" href="#About">About</a>
                <a className="nav-link" href="#contact">Contact</a>
                <a className="nav-link" href="#cv">CV</a>
                <a className="nav-link" href="#Projects">Projects</a>
            </div>
        </div>
    )
}