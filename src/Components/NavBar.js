import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import ThemeToggle from "./ThemeToggle";
import '../CSS/NavBar.css';

const NavBar = () => {
    return (
        <nav className="navBar" aria-label="Primary">
            <div className="navBarLeft">
                <Link to="/" className="navBrand">
                    KFenlon.com
                </Link>
            </div>
            <ul className="navRoutes">
                <li className="navRouteItem">
                    <ScrollLink to="projects" smooth={true} duration={500} className="navLink">
                        Projects
                    </ScrollLink>
                </li>
                <li className="navRouteItem">
                    <ScrollLink to="blog" smooth={true} duration={500} className="navLink">
                        Blog
                    </ScrollLink>
                </li>
                <li className="navRouteItem">
                    <ThemeToggle />
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
