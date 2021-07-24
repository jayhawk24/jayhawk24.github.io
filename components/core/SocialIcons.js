import React from "react";
export default function socialIcons({ link, icon }) {
  return (
    <div>
      <a href={link}>
        <i className={icon} aria-hidden="true"></i>
      </a>
    </div>
  );
}
