import { Shield, Cloud, Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          <span className="text-primary">About</span>
          <span className="text-foreground"> Me</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              I am a Cyber Security and Cloud enthusiast with hands-on experience in SOC fundamentals, 
              AWS Cloud services, web security, and secure application development. I have completed 
              internships with AWS Cloud and Palo Alto Cybersecurity and worked on real-world projects 
              like facial authentication with liveness detection, realtime chat app, and COVID-19 tracker. 
              I also have experience in vulnerability testing, website security analysis, and problem solving.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="group flex flex-col items-center text-center p-5 bg-secondary/30 rounded-lg border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
                <Shield className="w-10 h-10 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-foreground mb-1">Security Expert</h3>
                <p className="text-muted-foreground text-sm">SOC, Threat Analysis & Web Security</p>
              </div>
              
              <div className="group flex flex-col items-center text-center p-5 bg-secondary/30 rounded-lg border border-border hover:border-accent/40 transition-all duration-300 hover:-translate-y-1">
                <Cloud className="w-10 h-10 text-accent mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-foreground mb-1">Cloud Enthusiast</h3>
                <p className="text-muted-foreground text-sm">AWS EC2, IAM, VPC, S3</p>
              </div>
              
              <div className="group flex flex-col items-center text-center p-5 bg-secondary/30 rounded-lg border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
                <Code className="w-10 h-10 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-foreground mb-1">Developer</h3>
                <p className="text-muted-foreground text-sm">Python, React, JavaScript</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
