import React from "react";

export default function Card({ title, imgSrc, desc, link }) {
  return (
    <div
      className="card text-white bg-dark"
      style={{ boxShadow: "10px -10px #397ca4" }}
    >
      <img
        className="card-img-top"
        src={imgSrc}
        alt="Card Project head cap"
        height="250px"
        width="400px"
        style={{
          userSelect: "none"
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <a href={link} className="btn btn-primary">
          View Project
        </a>
      </div>
    </div>
  );
}
