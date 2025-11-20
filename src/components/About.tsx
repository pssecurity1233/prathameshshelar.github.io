import { Shield, Cloud, Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-primary glow-text">About</span>
          <span className="text-foreground"> Me</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-primary/20 rounded-lg p-8 hover:shadow-[0_0_30px_rgba(0,191,255,0.2)] transition-all duration-300">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I am a Cyber Security and Cloud enthusiast with hands-on experience in SOC fundamentals, 
              AWS Cloud services, web security, and secure application development. I have completed 
              internships with AWS Cloud and Palo Alto Cybersecurity and worked on real-world projects 
              like facial authentication with liveness detection, realtime chat app, and COVID-19 tracker. 
              I also have experience in vulnerability testing, website security analysis, and problem solving.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center text-center p-6 bg-secondary/50 rounded-lg border border-primary/10 hover:border-primary/50 transition-all duration-300">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Security Expert</h3>
                <p className="text-muted-foreground text-sm">SOC, Threat Analysis & Web Security</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-secondary/50 rounded-lg border border-accent/10 hover:border-accent/50 transition-all duration-300">
                <Cloud className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Cloud Enthusiast</h3>
                <p className="text-muted-foreground text-sm">AWS EC2, IAM, VPC, S3</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-secondary/50 rounded-lg border border-primary/10 hover:border-primary/50 transition-all duration-300">
                <Code className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Developer</h3>
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
