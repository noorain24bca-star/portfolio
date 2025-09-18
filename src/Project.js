import React, { useState } from "react";
import { projectsData } from "./projectsData";
import Project from "./projects"; // ✅ single card component

function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "All") return true;
    if (filter === "Full Stack") return project.category === "Full Stack";
    if (filter === "Future Ready Projects") return project.category === "Future Ready";
    return true;
  });

  return (
    <section className="hero">
      <h1>My Projects</h1>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Full Stack")}>Full Stack</button>
        <button onClick={() => setFilter("Future Ready Projects")}>Future Ready Projects</button>
      </div>

      {/* Project Cards */}
      <div className="projects-container">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <Project key={index} {...project} />
          ))
        ) : (
          <p>No projects available in this category.</p>
        )}
      </div>
    </section>
  );
}

export default Projects;
