function Projects() {
  const projects = [
    {
      title: "Microsoft Clone",
      description:
        "A responsive grocery shopping website built with React and Tailwind CSS.",
      tech: "React • Tailwind CSS • JavaScript",
      liveLink: "https://microsoft-homepage-tailwindcss-rfbk.vercel.app/",
      githubLink: "https://github.com/Yasir-Ullah/microsoft-homepage-clone",
      img: "/micro.png",
    },
    {
      title: "Blinkit UI Clone",

      description:
        "A modern and responsive Blinkit UI clone featuring a clean grocery shopping interface, product sections, categories, and an intuitive user experience.",
      tech: "HTML • CSS • JavaScript",
      liveLink: "https://blinkit-ui-clone-nine.vercel.app/",
      githubLink: "https://github.com/Yasir-Ullah/blinkit-ui-clone",
      img: "/blinkit.png",
    },
    {
      title: "Todo-App",
      description:
        "A modern and responsive Todo App to add, manage, and track daily tasks.",
      tech: "HTML • Tailwind CSS",
      liveLink: "https://todo-app-yasir18.vercel.app/",
      githubLink: "https://github.com/Yasir-Ullah/todo-app",
      img: "/todo.png",
    },
    {
      title: "Notes App",

      description:
        "A modern and responsive notes application built with HTML, CSS, and JavaScript. Create, save, edit, and delete notes easily using local storage.",
      tech: "HTML • CSS • JavaScript",
      liveLink: "https://notes-app-yasir18.vercel.app/",
      githubLink: "https://github.com/Yasir-Ullah/notes-app",
      img: "/notes.png",
    },
    {
      title: "Tic-Tac-Toe-Game ",
      description:
        "An interactive Tic-Tac-Toe game built with HTML, CSS, and JavaScript. Play against a friend, track the winner, and restart the game.",
      tech: "HTML • CSS • JavaScript",
      liveLink: "https://tic-tac-toe-yasir18.vercel.app/",
      githubLink: "https://github.com/Yasir-Ullah/tic-tac-toe-",
      img: "/tictac.png",
    },

    {
      title: "Grocify",
      description:
        "A modern and responsive grocery shopping website built with React and Tailwind CSS, featuring an attractive user interface, product browsing, and a smooth shopping experience.",
      tech: "React • Tailwind CSS",
      liveLink: "https://grocify-grocery-website.vercel.app/",
      githubLink: "https://github.com/Yasir-Ullah/grocify-grocery-website",
      img: "/grocify.png",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Title */}
        <div className="section-title">
          <p>My Recent Work</p>

          <h2>
            My <span>Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              {/* Project Image */}
              <div className="project-image">
                <img
                  src={project.img}
                  alt={`${project.title} project`}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                {/* <span>&lt;/&gt;</span> */}
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <span className="tech">{project.tech}</span>

                {/* Buttons */}
                <div className="project-buttons">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
