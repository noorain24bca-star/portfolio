import React from "react";

function Blog() {
  return (
    <section className="blog-section">
      <h1 style={{ textAlign: "center" }}>My Blog</h1>

      <div className="blog-container">
        <h2>Building My First Major Web App: Bagify</h2>
        <p><em>A project to test my front-end skills by creating a complete product website.</em></p>

        {/* Website Introduction */}
        <h3>Website Introduction</h3>
        <p>
          Bagify is a responsive e-commerce website built with React where users
          can browse and explore bags such as Tote Bags, Leather Handbags,
          Crossbody, and Designer Satchels. It was designed to simulate a
          real-world shopping experience.
        </p>

        {/* The Challenge */}
        <h3>The Challenge</h3>
        <p>
          My biggest challenge was to design a fully responsive website with a
          polished UI while managing the product data efficiently. I also had to
          ensure smooth navigation between multiple pages without reloading the
          site.
        </p>

        {/* Technology Stack */}
        <h3>Technology Stack</h3>
        <ul>
          <li><strong>React:</strong> Component-based front-end structure</li>
          <li><strong>CSS:</strong> Custom styling and responsive design</li>
          <li><strong>React Router:</strong> Navigation between pages and dynamic routes for each product</li>
          <li><strong>React Hooks (useState, useEffect):</strong> To manage cart state and product data</li>
        </ul>

        {/* What I Learned */}
        <h3>What I Learned</h3>
        <p>
          This project gave me valuable experience in building a real-world web
          application. I learned about routing, state management, and structuring
          components properly. It also improved my ability to debug issues and
          think about scalability in future projects.
        </p>
      </div>
    </section>
  );
}

export default Blog;
