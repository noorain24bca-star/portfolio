import React from "react";
import profile from "./Image/portfolio.jpg";

function Home() {
  return (
    <section className="home">
      {/* About Me */}
      <div className="about">
        <img src={profile} alt="Noorain" className="profile-img" />
        <h1>Hi, I'm Noorain Patankar 👋</h1>
        <p>
          I am a <strong>Bachelor of Computer Applications (BCA)</strong> student at 
          <strong> Pillai College of Arts, Commerce & Science</strong>.  
          I have a strong passion for web development and enjoy creating interactive, responsive web applications using <strong>React, JavaScript, and CSS</strong>.  
          I aim to combine both academic knowledge and practical skills to deliver user-friendly and impactful digital experiences.  
          Always eager to take on creative projects where I can innovate, learn, and build meaningful solutions.
        </p>
      </div>

      {/* Skills */}
      <div className="skills">
        <h2>Skills</h2>
        <ul>
          <li>React.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5 & CSS3</li>
          <li>Responsive Web Design</li>
          <li>Git & GitHub</li>
        </ul>
      </div>

      {/* Education */}
      <div className="education">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>Bachelor of Computer Applications (2025 - Present)</strong><br />
            Pillai College of Arts, Commerce & Science, New Panvel<br />
            Semester 1 SGPA: 7.68 | Semester 2 SGPA: 8.36
          </li>
          <li>
            <strong>Higher Secondary in Science (2023 - 2024)</strong><br />
            Changu Kana Thakur Junior College, Panvel<br />
            HSC Board: 63.33%
          </li>
          <li>
            <strong>Secondary Education (2021 - 2022)</strong><br />
            St John Convent High School, Mumbra<br />
            SSC Board: 75.60%
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
