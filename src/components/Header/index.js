import { useState } from "react";
import "./Header.css";
import { MenuOutlined } from "@ant-design/icons"
export default function Header() {
    const [isOpenNav, setIsOpenNav] = useState();

    const toggleNav = () => setIsOpenNav(!isOpenNav);

    return (
        <div className="display_row full_w">
            <div className="header-container display_row full_w">
                <img src="logo.png" alt="" />
                <div className={`header-nav display_col`}>
                    <button type="button" className="nav-button" onClick={toggleNav}>
                        <MenuOutlined />
                    </button>
                    <div className={`gap2 nav-container ${isOpenNav ? "nav-open" : "nav-close"}`}>
                        <a className="nav-link" href="#about">About</a>
                        <a className="nav-link" href="contact">Contact</a>
                        <a className="nav-link" href="cv">CV</a>
                        <a className="nav-link" href="#projects">Projects</a>
                    </div>
                </div>
            </div>
        </div>
    )
}