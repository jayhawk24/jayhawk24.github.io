import React from 'react';
import SocialIcons from '../core/SocialIcons';
import { home, socials } from '../../data';

export default function Main() {
    const domain = home.domain.split('.');

    return (
        <section className="home">
            <div className="sidebar bg-container">
                <div className="domain">
                    {domain.slice(0, 1)[0]}
                    <span>.{domain.slice(1).join('.')}</span>
                </div>

                <div className="intro">
                    <p>
                        Hello, <img src="assets/hi.png" alt="" />
                    </p>
                    <h1>I'm {home.name}</h1>
                    <h5>{home.subtitle}</h5>
                    <a
                        href={'mailto:' + home.email}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>CONTACT ME</button>
                    </a>
                </div>
                <div className="icons">
                    <SocialIcons
                        link={'https://twitter.com/' + socials.twitter}
                        icon={'fab fa-twitter'}
                    />
                    <SocialIcons
                        link={'https://github.com/' + socials.github}
                        icon={'fab fa-github'}
                    />
                    <SocialIcons
                        link={'https://www.instagram.com/' + socials.instagram}
                        icon={'fab fa-instagram'}
                    />
                </div>
            </div>
            <div className="banner">
                <img src="assets/undraw_coding_6mjf.svg" alt="illustration" />
                <p>
                    {home.desc}
                    <br />
                    <button>
                        <a
                            href={home.resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Resume
                        </a>
                    </button>
                </p>
            </div>
        </section>
    );
}
