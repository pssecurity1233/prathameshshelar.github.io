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
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          <span className="text-primary">Featured</span>
          <span className="text-foreground"> Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-secondary text-foreground rounded border border-border"
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
