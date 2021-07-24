import React from "react";
import SocialIcons from "../core/socail-icons/SocialIcons";
import Container from "../core/Container";

export default function Main() {
  return (
    <section class="home">
      <div className="sidebar bg-container">
        <div class="domain">
          jayhawk<span>.github.io</span>
        </div>
        <div class="intro">
          <p>
            Hello, <img src="assets/hi.png" alt="" />
          </p>
          <h1>I'm Anubhav</h1>
          <h5>
            A Freelance Web Developer. <br />
            From India.
          </h5>
          <button>CONTACT ME</button>
        </div>
        <Container>
          <SocialIcons
            link={"https://twitter.com/jayh4wk"}
            icon={"fab fa-twitter"}
          />
          <SocialIcons
            link={"https://github.com/jayhawk24"}
            icon={"fab fa-github"}
          />
          <SocialIcons
            link={"https://www.instagram.com/__jayhawk__"}
            icon={"fab fa-instagram"}
          />
        </Container>
      </div>
      <div class="banner">
        <img src="assets/undraw_coding_6mjf.svg" alt="illustration" />
        <p>
          A passionate Full Stack Software Developer 🚀 having an experience of
          building Web and Mobile applications with JavaScript / Reactjs /
          Nodejs and some other cool libraries and frameworks.
          <br />
          <button>
            <a href="https://drive.google.com/file/d/13GuLt0aXVxbTFOLFx-j9fJOXLlqdPnDf/view?usp=sharing">
              View Resume
            </a>
          </button>
        </p>
      </div>
    </section>
  );
}
