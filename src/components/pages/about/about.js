import React from 'react';
import './about.css';
import BgContainer from '../../main/BgContainer';

export default function About() {
    return (
        <div>
            <BgContainer>
                <section class="about">
                    <div class="content">
                        <h1>
                            Know Who <span> I Am </span>
                        </h1>
                        <p>
                            Hi guys, I am <span>Anubhav Gupta</span> from
                            <span>Varanasi, India.</span>
                            <br />
                            I am a final year student at GKV pursuing B.Tech
                            specialized in Computer Science and Engineering.
                            <br />
                            <br />
                            Apart from coding, there are a lot of activities I
                            love to do like...
                        </p>

                        <ul>
                            <li>
                                <i class="fa fa-angle-right"></i> Playing
                                Basketball
                            </li>
                            <li>
                                <i class="fa fa-angle-right"></i> Chess
                            </li>
                            <li>
                                <i class="fa fa-angle-right"></i> Hiking
                            </li>
                            <li>
                                <i class="fa fa-angle-right"></i> Swimming
                            </li>
                        </ul>

                        <span class="quote">
                            "Write code that changes Lives..."
                        </span>
                    </div>

                    <img src="assets/coding.svg" alt="" />
                </section>
            </BgContainer>
            <section class="skillset">
                <div class="container">
                    <h1>
                        Technical <span>Skillset</span>
                    </h1>
                    <div class="icons-container">
                        <i class="devicon-python-plain-wordmark"></i>
                        <i class="devicon-react-original-wordmark colored"></i>
                        <i class="devicon-bash-plain"></i>
                        <i class="devicon-cplusplus-plain"></i>
                        <i class="devicon-css3-plain"></i>
                        <i class="devicon-docker-plain-wordmark"></i>
                        <i class="devicon-django-plain"></i>
                        <i class="devicon-html5-plain"></i>
                        <i class="devicon-git-plain"></i>
                        <i class="devicon-javascript-plain"></i>
                        <i class="devicon-jquery-plain-wordmark"></i>
                        <i class="devicon-mongodb-plain-wordmark"></i>
                        <i class="devicon-nodejs-plain-wordmark"></i>
                        <i class="devicon-npm-original-wordmark"></i>
                        <i class="devicon-php-plain"></i>
                    </div>
                </div>
                <div class="container">
                    <h1>
                        <span>Tools</span> I use
                    </h1>
                    <div class="icons-container tools">
                        <i class="devicon-github-original"></i>
                        <i class="devicon-photoshop-line"></i>
                        <i class="devicon-vim-plain"></i>
                        <i class="devicon-visualstudio-plain"></i>
                        <i class="devicon-linux-plain"></i>
                    </div>
                </div>
            </section>
        </div>
    );
}
