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
    <section id="services" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 animate-fade-in">
          <span className="text-primary">Cyber Security</span>
          <span className="text-foreground"> Services</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Professional security testing and consulting services
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-all duration-300"
              >
                <div className="p-2 bg-primary/10 rounded-lg w-fit mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
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
            className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-300 font-medium"
          >
            Request Security Testing
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
