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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          <span className="text-primary">Technical</span>
          <span className="text-foreground"> Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-secondary text-foreground rounded border border-border text-sm"
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
