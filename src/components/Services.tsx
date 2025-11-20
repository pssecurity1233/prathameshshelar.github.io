import { Shield, FileSearch, Bug, Lock, Cloud, AlertTriangle } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Website Vulnerability Testing",
      description: "Comprehensive security testing to identify vulnerabilities in web applications",
      icon: FileSearch,
    },
    {
      title: "Security Audit & Report Generation",
      description: "Detailed security audits with professional reports and remediation guidelines",
      icon: Shield,
    },
    {
      title: "SQL Injection & XSS Testing",
      description: "Specialized testing for common web vulnerabilities like SQLi and XSS attacks",
      icon: Bug,
    },
    {
      title: "Authentication Security Review",
      description: "In-depth analysis of authentication mechanisms and session management",
      icon: Lock,
    },
    {
      title: "Cloud Security Misconfiguration Check",
      description: "AWS security assessment to identify and fix cloud misconfigurations",
      icon: Cloud,
    },
    {
      title: "Malware & Threat Analysis (Basic)",
      description: "Basic malware detection and threat intelligence analysis",
      icon: AlertTriangle,
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-primary glow-text">Cyber Security</span>
          <span className="text-foreground"> Services</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Professional security testing and consulting services to protect your digital assets
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card border border-primary/20 rounded-lg p-6 hover:shadow-[0_0_30px_rgba(0,191,255,0.3)] hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:shadow-[0_0_20px_rgba(0,191,255,0.4)] transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-md hover:shadow-[0_0_30px_rgba(0,255,127,0.5)] transition-all duration-300 font-semibold"
          >
            Request Security Testing
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
