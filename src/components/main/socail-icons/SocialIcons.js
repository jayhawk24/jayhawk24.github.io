import React from 'react';
import './social-icon.css';
export default function socialIcons({ link, icon }) {
    return (
        <div>
            <a href={link}>
                <i class={icon} aria-hidden="true"></i>
            </a>
        </div>
    );
}
