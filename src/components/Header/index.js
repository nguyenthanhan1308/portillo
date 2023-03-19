import {useState} from "react";
import "./Header.css";
import {MenuOutlined} from "@ant-design/icons"
export default function Header () {
    const windowWidth =  window?.innerWidth;
    const [isOpenNav, setIsOpenNav] = useState(!!(windowWidth > 768));
    
    const onOpenNav = () => setIsOpenNav(true);
    const onCloseNav = () => setIsOpenNav(false);
    
    return (
        <div className="display_row full_w">
            <div className="header-container display_row full_w">
                <img src="logo.png" alt="" />
                    {!isOpenNav && <button className="nav-button" onClick={onOpenNav}>
                            <MenuOutlined/>
                        </button>}
                    {isOpenNav &&
                        <div className={`header-nav gap2 nav-container`}>
                            <button className="nav-button" onClick={onCloseNav}>
                                <MenuOutlined />
                            </button>
                            <a className="nav-link" href="#about">About</a>
                            <a className="nav-link" href="contact">Contact</a>
                            <a className="nav-link" href="cv">CV</a>
                            <a className="nav-link" href="#projects">Projects</a>
                        </div>
                    }
            </div>
        </div>
    )
}