import React from "react";
import "./personal_web_css.css";

const About = () => {
    return (
        <div>
            <div id="cursor"></div>
            <a id="logo" href="personal_web.html">GC</a>
            <div id="navigation-other">
                <a class="a-about" href="default.asp">Archive</a>
                <a class="a-about" href="news.asp">100 Days of [name]</a>
                <a class="a-about" href="contact.asp">Projects</a>
                <a class="a-about" href="personal_web.html">Home</a>
            </div>

            <div id="about">
                <h1 class="greeting-about">Hi, I'm Gabriella Codrington</h1>
                <h2 class="mini-bio-about">I am a software engineer at J.P. Morgan Chase & Co. I'm hoping to break into UX design and creative technology by creating projects that I'm passionate about. I enjoy combining my passions for tech, human-centered thinking, and creativity and this website displays all of it.</h2>
            </div>
        </div>
    );
};
export default About;

