import { Shield, MessageSquare, Activity, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Facial Authentication with Liveness Detection",
      description: "Secure authentication system with real-time liveness detection to prevent spoofing attacks",
      technologies: ["Python", "React", "Bootstrap"],
      icon: Shield,
    },
    {
      title: "Realtime Chat App",
      description: "End-to-end encrypted chat application with Firebase authentication and real-time messaging",
      technologies: ["Firebase Auth", "Firestore", "React"],
      icon: MessageSquare,
    },
    {
      title: "COVID-19 Tracker",
      description: "Live tracking dashboard for COVID-19 statistics with data visualization and API integration",
      technologies: ["API", "JavaScript", "HTML", "CSS"],
      icon: Activity,
    },
    {
      title: "Portfolio Website Security Tester",
      description: "Automated vulnerability scanner for websites with comprehensive security reporting",
      technologies: ["Python", "Security Testing"],
      icon: Globe,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-primary glow-text">Featured</span>
          <span className="text-foreground"> Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-card border border-primary/20 rounded-lg p-6 hover:shadow-[0_0_30px_rgba(0,191,255,0.3)] hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:shadow-[0_0_20px_rgba(0,191,255,0.4)] transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs bg-secondary text-primary rounded-md border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
