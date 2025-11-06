import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiNextdotjs,
  SiExpress,
  SiVercel,
  // SiVisualstudiocode,
  SiTypescript,
  SiRedux,
  SiFirebase,
  SiNpm,
  SiJsonwebtokens,
  SiPrisma,
} from "react-icons/si";

export const SkillsSection = () => {
  const frontendSkills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript (ES6+)", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-red" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs className="text-gray-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
    { name: "Prisma ORM", icon: <SiPrisma className="text-sky-400" /> },
    { name: "JWT Auth", icon: <SiJsonwebtokens className="text-orange-500" /> },
    { name: "REST APIs", icon: <SiNpm className="text-red-500" /> },
  ];

  const tools = [
    { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "Docker", icon: <FaDocker className="text-sky-500" /> },
    { name: "Vercel", icon: <SiVercel className="text-red" /> },
    // { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-500" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
    { name: "Postman", icon: <SiExpress className="text-orange-400" /> },
    { name: "NPM", icon: <SiNpm className="text-red-500" /> },
  ];

  const renderSkillGroup = (title, skills) => (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold text-primary mb-8 text-center md:text-left underline underline-offset-8 decoration-primary/40">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, key) => (
          <div
            key={key}
            className="group flex flex-col items-center justify-center p-5 bg-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
          >
            <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          My <span className="text-primary">Skills & Tools</span>
        </h2>

        {renderSkillGroup("Frontend Development", frontendSkills)}
        {renderSkillGroup("Backend Development", backendSkills)}
        {renderSkillGroup("Development Tools", tools)}
      </div>
    </section>
  );
};
