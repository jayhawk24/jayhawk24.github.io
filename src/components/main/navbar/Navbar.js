import React from 'react';
import './navbar.css';

export default function Navbar() {
    return (
        <nav>
            <div class="icon">
                <div id="bars">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
            </div>
            <ul>
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <nobr>
                        <a href="about.html">About Me</a>
                    </nobr>
                </li>
                <li>Projects</li>
            </ul>
        </nav>
    );
}
