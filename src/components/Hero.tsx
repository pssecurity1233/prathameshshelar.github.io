import { Shield, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center justify-center mb-4">
            <Shield className="w-20 h-20 text-primary animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-primary glow-text">Prathamesh</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-muted-foreground">
            <span className="text-primary">Cyber Security Analyst</span> | 
            <span className="text-accent"> Cloud Enthusiast</span> | 
            <span className="text-foreground"> Python Developer</span>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Karmaveer Bhaurao Patil College of Engineering, Satara
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:shadow-[0_0_30px_rgba(0,191,255,0.6)] transition-all duration-300 font-semibold"
            >
              Get In Touch
            </a>
            <a
              href="#"
              className="px-8 py-3 bg-secondary text-secondary-foreground rounded-md border border-primary hover:shadow-[0_0_30px_rgba(0,255,127,0.3)] transition-all duration-300 font-semibold flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
