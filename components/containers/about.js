import React from 'react';
import { about } from '../../data';
import ReactTooltip from 'react-tooltip';

export default function About() {
    return (
        <div>
            <div className="bg-container">
                <section className="about">
                    <div className="content">
                        <h1>
                            Know Who <span> I Am </span>
                        </h1>
                        <p>{about.aboutMe}</p>

                        <ul>
                            {about.hobbies.map((hobby) => (
                                <li>
                                    <i className="fa fa-angle-right"></i>{' '}
                                    {hobby}
                                </li>
                            ))}
                        </ul>

                        <span className="quote">"{about.quote}"</span>
                    </div>

                    <img src="assets/coding.svg" alt="" />
                </section>
            </div>
            <section className="skillset">
                <div className="container">
                    <ReactTooltip place="top" type="light" effect="solid" />
                    <h1>
                        Technical <span>Skillset</span>
                    </h1>
                    <div className="icons-container">
                        {about.skills.map((skill) => (
                            <i
                                data-tip={skill}
                                className={`devicon-${skill}-plain colored`}
                            ></i>
                        ))}
                    </div>
                </div>
                <div className="container">
                    <h1>
                        <span>Tools</span> I use
                    </h1>
                    <div className="icons-container tools">
                        {about.tools.map((tool) => (
                            <i
                                data-tip={tool}
                                className={`devicon-${tool}-plain colored`}
                            ></i>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
