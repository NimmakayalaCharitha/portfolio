import profile from "./assets/profile.jpeg";

function Home() {
  return (
    <div className="container">

      {/* HERO */}
      <div className="hero">
        <div className="hero-text">
          <h1>Charitha Nimmakayala</h1>
          <p className="tagline">
            Exploring data, problem solving, and real-world applications
          </p>

          <div className="hero-buttons">
            <a href="/projects" className="btn">View Projects</a>
            <a href="https://github.com/NimmakayalaCharitha" className="btn-outline">GitHub</a>
          </div>
        </div>

        <img src={profile} alt="profile" className="profile-img" />
      </div>

      {/* DASHBOARD */}
      <div className="dashboard">
        <div className="stat-card">
          <h2>5+</h2>
          <p>Projects</p>
        </div>

        <div className="stat-card">
          <h2>2023</h2>
          <p>B.Tech Started</p>
        </div>
      </div>

      {/* ABOUT */}
      <div className="card">
        <h2>About Me</h2>
        <p>
          I like working on problems where the answer isn’t obvious at first. That’s what got me interested in data analysis and machine learning. I’ve worked on projects like credit risk prediction and time-series forecasting, which pushed me to think beyond just writing code and focus on how decisions are made. I’m still learning and improving, but I try to build things thoughtfully and understand what I’m doing.
        </p>
      </div>

      {/* GRID */}
      <div className="grid">
        <div className="card">
          <h2>Research Interests</h2>
          <p>Data Analysis, Machine Learning, AI</p>
        </div>

        <div className="card">
          <h2>Skills</h2>
          <p>Python, C, Pandas, NumPy, Scikit-learn, HTML, CSS, XML</p>
        </div>
      </div>

      {/* EDUCATION */}
      <div className="card">
        <h2>Education</h2>
        <p><b>B.Tech - CSE</b> (2023–Present)</p>
        <p>Mahindra University | CGPA: 6.4</p>

        <br />

        <p><b>Intermediate</b> – 91%</p>
        <p>Excellencia Junior College</p>

        <p><b>10th Grade</b> – 85%</p>
        <p>Suchitra Academy</p>
      </div>

      {/* PERSONAL */}
      <div className="card">
        <h2>Personal Details</h2>
        <p><b>Phone:</b> 8639859427</p>
        <p><b>Email:</b> Charitha1312@gmail.com</p>
      </div>

    </div>
  );
}

export default Home;