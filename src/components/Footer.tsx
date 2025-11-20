import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-1">
              <span className="text-primary">Prathamesh</span>
              <span className="text-foreground"> Shelar</span>
            </h3>
            <p className="text-muted-foreground text-sm">Cyber Security Analyst</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="mailto:prathameshshelar389@gmail.com"
              className="p-2.5 bg-secondary rounded-lg border border-border hover:border-primary transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-secondary rounded-lg border border-border hover:border-primary transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-secondary rounded-lg border border-border hover:border-primary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Prathamesh Shelar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
