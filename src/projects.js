import React from "react";

function Project({ title, description, tech, link }) {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Tech Stack:</strong> {tech.join(", ")}</p>
      <a href={link} target="_blank" rel="noreferrer">
        <button>View Project</button>
      </a>
    </div>
  );
}

export default Project;
