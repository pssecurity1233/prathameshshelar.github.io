import { Shield, Download, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <Shield className="w-16 h-16 text-primary animate-pulse" />
              <div className="absolute inset-0 bg-primary/20 blur-2xl animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <div className="text-muted-foreground text-xl md:text-2xl mb-2">Hello, I'm</div>
            <div className="text-primary glow-text mb-2">Prathamesh Shelar</div>
            <div className="text-foreground text-2xl md:text-3xl font-medium">
              Cyber Security Analyst
            </div>
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-3 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">Cloud Enthusiast</span>
            <span className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">Python Developer</span>
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">SOC Analyst</span>
          </div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Karmaveer Bhaurao Patil College of Engineering, Satara
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 pt-4">
            <a
              href="#contact"
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:shadow-[0_0_30px_rgba(0,191,255,0.6)] transition-all duration-300 font-semibold flex items-center gap-2"
            >
              Let's Connect
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          <a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-secondary text-foreground rounded-lg border border-border hover:border-primary hover:shadow-[0_0_20px_rgba(0,191,255,0.3)] transition-all duration-300 font-semibold flex items-center gap-2"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download Resume
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
