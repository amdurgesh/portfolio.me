import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "PG Finder Website",
    description: "PG Life is a platform designed to make it easy for students and working professionals to find PG.",
    image: "/projects/pglife.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://pgiife.wuaze.com/",
    githubUrl: "https://github.com/amdurgesh/PGlife_Project",
  },
  {
    id: 2,
    title: "Modern TODO List",
    description:
      "A clean and minimal To-Do List web application built to help users manage daily tasks with ease.",
    image: "/projects/todo.png",
    tags: ["JavaScript", "HTML", "CSS"],
<<<<<<< HEAD
    demoUrl: "https://amdurgesh.github.io/Todo-list/",
=======
    demoUrl: "https://amdurgesh.github.io/Todo-list",
>>>>>>> 743133365f672b1ae7dd99279144169cb8bd9328
    githubUrl: "https://github.com/amdurgesh/Todo-list",
  },
  {
    id: 3,
    title: "Weather Detection website",
    description:
      "A responsive web weather page displaying real-time temperature, humidity, and forecast details.",
    image: "/projects/weather.png",
    tags: ["JavaScript", "HTML", "CSS"],
    demoUrl: "https://amdurgesh.github.io/Web-Weather/",
    githubUrl: "https://github.com/amdurgesh/Web-Weather",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/amdurgesh"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
