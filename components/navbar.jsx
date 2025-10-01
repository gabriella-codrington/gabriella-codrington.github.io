import React from "react";
import { useLocation } from 'react-router-dom';
import './styling/navbar.css';

const Navbar = () => {
    const location = useLocation();
    const isAboutPage = location.pathname === '/about';

    return (
        <nav id="navigation-home" className={isAboutPage ? 'navigation-other' : 'navigation-home'}>
            <a id="logo" href="personal_web.html">GC</a>
            <div id="navigation-home">
                    <a class="a-home" href="./404.html">Archive</a>
                    <a class="a-home" href="./404.html">100 Days of [name]</a>
                    <a class="a-home" href="./404.html">Projects</a>
                    <a class="a-home" href="./about.html">About</a>
            </div>
        </nav>
    );
};

export default Navbar;