import {useState} from "react";
import "./Header.css";
export default function Header () {
    const [isOpenNav, setIsOpenNav] = useState(false);
    
    const onOpenNav = () => setIsOpenNav(true);
    const onCloseNav = () => setIsOpenNav(false);

    
    const screenWidth = window.innerWidth;

    return (
        <div className="display_row full_w">
            <div className="header-container display_row full_w">
                <img src="logo.png" alt="" />
                    <div className={`header-nav gap2 ${screenWidth <= 768 ? "display_col nav-container" : "display_row"}`}>
                        <a className="nav-link" href="about">About</a>
                        <a className="nav-link" href="contact">Contact</a>
                        <a className="nav-link" href="cv">CV</a>
                        <a className="nav-link" href="projects">Projects</a>
                    </div>
            </div>
        </div>
    )
}