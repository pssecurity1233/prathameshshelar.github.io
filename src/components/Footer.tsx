import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cyber-dark border-t border-primary/20 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-primary glow-text">Prathamesh</span>
              <span className="text-foreground"> Shelar</span>
            </h3>
            <p className="text-muted-foreground">Cyber Security Analyst & Cloud Enthusiast</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="mailto:prathameshshelar389@gmail.com"
              className="p-3 bg-secondary rounded-lg border border-primary/20 hover:border-primary hover:shadow-[0_0_20px_rgba(0,191,255,0.4)] transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary rounded-lg border border-primary/20 hover:border-primary hover:shadow-[0_0_20px_rgba(0,191,255,0.4)] transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary rounded-lg border border-primary/20 hover:border-primary hover:shadow-[0_0_20px_rgba(0,191,255,0.4)] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary/10 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Prathamesh Shelar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
