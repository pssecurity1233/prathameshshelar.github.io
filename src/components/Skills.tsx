const Skills = () => {
  const skillCategories = [
    {
      title: "Cyber Security",
      skills: ["SOC", "Threat Analysis", "Firewalls", "Web Security (SQLi, XSS, CSRF)", "Vulnerability Assessment", "Website Testing"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS EC2", "IAM", "VPC", "S3", "Cloud Security Basics", "Git"],
    },
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "C", "ReactJS"],
    },
    {
      title: "Databases & Tools",
      skills: ["MySQL", "Firebase", "Firestore"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-primary glow-text">Technical</span>
          <span className="text-foreground"> Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-primary/20 rounded-lg p-6 hover:shadow-[0_0_30px_rgba(0,191,255,0.2)] transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-secondary text-foreground rounded-md border border-primary/30 hover:border-primary hover:shadow-[0_0_15px_rgba(0,191,255,0.3)] transition-all duration-300 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
