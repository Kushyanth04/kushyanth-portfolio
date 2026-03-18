import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Team Workflow Tracker",
    description:
      "A multi-tenant backend with real-time team collaboration via WebSockets. Features RBAC, scalable workspace isolation using Docker on AWS, and a React UI.",
    image: "/projects/project1.png",
    tags: ["FastAPI", "PostgreSQL", "React", "WebSockets"],
    link: "https://github.com/Kushyanth04",
    github: "https://github.com/Kushyanth04",
  },
  {
    title: "LLM Test Case Generation Framework",
    description:
      "A Python automation framework comparing ChatGPT 4 and Claude 3.5 using zero-shot and few-shot strategies. Automatically generates, evaluates, and grades code test cases.",
    image: "/projects/project3.png",
    tags: ["Python", "OpenAI", "Anthropic", "Pytest"],
    link: "https://github.com/Kushyanth04",
    github: "https://github.com/Kushyanth04",
  },
  {
    title: "Real Time Chat Application",
    description:
      "Full-stack chat application with real-time 1-to-1 messaging, JWT authentication, and bcrypt security. CI/CD pipeline deployed to Render with MongoDB Atlas.",
    image: "/projects/project4.png",
    tags: ["NestJS", "Socket.io", "MongoDB", "GitHub Actions"],
    link: "https://github.com/Kushyanth04",
    github: "https://github.com/Kushyanth04",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Top Links Overlay */}
              <div className="flex items-center justify-end gap-2 p-4 pb-0 opacity-100">
                <a
                  href={project.link}
                  className="p-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href={project.github}
                  className="p-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a href="https://github.com/Kushyanth04" target="_blank" rel="noopener noreferrer">
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
