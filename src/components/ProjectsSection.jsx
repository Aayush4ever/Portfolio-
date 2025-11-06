import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Tech-AI",
    description:
      "TECH-Ai is an AI-powered career guidance platform that provides users with detailed field insights, interactive quizzes, and smart tools like resume and cold email generation.",
    image: "/projects/project1.png",
    tags: ["Next.js", "TailwindCSS", "ShadCn UI", "Supabase"],
    demoUrl: "https://tech-ai-green.vercel.app/",
    githubUrl: "https://github.com/aayush-0811/TECH-Ai",
  },
  {
    id: 2,
    title: "Smart School",
    description:
      "SmartSchool is a full-featured School Management System designed to streamline administrative operations, simplify student and staff management, and enhance communication between stakeholders.",
    image: "/projects/project2.png",
    tags: ["React Js", "Node.js", "Express.js", "Mongo DB"],
    demoUrl: "https://smart-school-opal.vercel.app/",
    githubUrl: "https://github.com/aayush-0811/SmartSchool",
  },
  {
    id: 3,
    title: "WeChat",
    description:
      "A modern real-time chat application inspired by WeChat, built for seamless communication. This project demonstrates real-time messaging, authentication, and media sharing using a scalable backend and a responsive frontend.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Socket.io", "Daisy UI"],
    demoUrl: "https://wechat-f082.onrender.com/login",
    githubUrl: "https://github.com/aayush-0811/WeChat",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
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
                    <span
                      key={`${project.id}-${tag}`}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
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
            rel="noreferrer"
            href="https://github.com/aayush-0811"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
