import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import '../CSS/NavBar.css';

const NavBar = () => {
    return (
        <div className="container">
            <div className="left">
                <Link to="/" className="mainHeading">
                    KFenlon.com
                </Link>
            </div>
            <div className="right">
                <ul className="routes">
                    <li className="routesLink">
                        <Link to="/" className="link">
                            Home
                        </Link>
                    </li>
                    <li className="routesLink">
                        <ScrollLink to="projects" smooth={true} duration={500} className="link">
                            Projects
                        </ScrollLink>
                    </li>
                    {/* <li className="routesLink">
                        <Link to="/blog" className="link">
                            Blog
                        </Link>
                    </li> */}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
