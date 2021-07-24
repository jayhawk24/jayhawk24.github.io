import React from "react";

export default function About() {
  return (
    <div>
      <div className="bg-container">
        <section className="about">
          <div className="content">
            <h1>
              Know Who <span> I Am </span>
            </h1>
            <p>
              Hi guys, I am <span>Anubhav Gupta</span> from
              <span>Varanasi, India.</span>
              <br />
              I am a final year student at GKV pursuing B.Tech specialized in
              Computer Science and Engineering.
              <br />
              <br />
              Apart from coding, there are a lot of activities I love to do
              like...
            </p>

            <ul>
              <li>
                <i className="fa fa-angle-right"></i> Playing Basketball
              </li>
              <li>
                <i className="fa fa-angle-right"></i> Chess
              </li>
              <li>
                <i className="fa fa-angle-right"></i> Hiking
              </li>
              <li>
                <i className="fa fa-angle-right"></i> Swimming
              </li>
            </ul>

            <span className="quote">"Write code that changes Lives..."</span>
          </div>

          <img src="assets/coding.svg" alt="" />
        </section>
      </div>
      <section className="skillset">
        <div className="container">
          <h1>
            Technical <span>Skillset</span>
          </h1>
          <div className="icons-container">
            <i className="devicon-python-plain-wordmark"></i>
            <i className="devicon-react-original-wordmark colored"></i>
            <i className="devicon-bash-plain"></i>
            <i className="devicon-cplusplus-plain"></i>
            <i className="devicon-css3-plain"></i>
            <i className="devicon-docker-plain-wordmark"></i>
            <i className="devicon-django-plain"></i>
            <i className="devicon-html5-plain"></i>
            <i className="devicon-git-plain"></i>
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-jquery-plain-wordmark"></i>
            <i className="devicon-mongodb-plain-wordmark"></i>
            <i className="devicon-nodejs-plain-wordmark"></i>
            <i className="devicon-npm-original-wordmark"></i>
            <i className="devicon-php-plain"></i>
          </div>
        </div>
        <div className="container">
          <h1>
            <span>Tools</span> I use
          </h1>
          <div className="icons-container tools">
            <i className="devicon-github-original"></i>
            <i className="devicon-photoshop-line"></i>
            <i className="devicon-vim-plain"></i>
            <i className="devicon-visualstudio-plain"></i>
            <i className="devicon-linux-plain"></i>
          </div>
        </div>
      </section>
    </div>
  );
}
