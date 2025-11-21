import { Shield, AlertTriangle, Lock, Bug, Database, Globe, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CyberAttacks = () => {
  const attacks = [
    {
      icon: Bug,
      name: "SQL Injection",
      description: "SQL injection is a code injection technique that exploits vulnerabilities in database queries. Attackers can manipulate SQL queries to access, modify, or delete data.",
      impact: "Data theft, database corruption, unauthorized access",
      prevention: "Use parameterized queries, input validation, and least privilege principles"
    },
    {
      icon: AlertTriangle,
      name: "Cross-Site Scripting (XSS)",
      description: "XSS attacks inject malicious scripts into trusted websites. These scripts execute in users' browsers, potentially stealing session tokens or sensitive data.",
      impact: "Session hijacking, credential theft, malware distribution",
      prevention: "Input sanitization, Content Security Policy, output encoding"
    },
    {
      icon: Lock,
      name: "CSRF Attack",
      description: "Cross-Site Request Forgery tricks authenticated users into executing unwanted actions on web applications where they're authenticated.",
      impact: "Unauthorized transactions, data modification, account compromise",
      prevention: "CSRF tokens, SameSite cookies, user verification for sensitive actions"
    },
    {
      icon: Database,
      name: "Data Breach",
      description: "Unauthorized access to confidential data through various attack vectors including weak passwords, social engineering, or system vulnerabilities.",
      impact: "Identity theft, financial loss, reputation damage, legal consequences",
      prevention: "Encryption, access controls, regular security audits, employee training"
    },
    {
      icon: Globe,
      name: "DDoS Attack",
      description: "Distributed Denial of Service attacks overwhelm systems with traffic from multiple sources, making services unavailable to legitimate users.",
      impact: "Service downtime, revenue loss, customer trust damage",
      prevention: "Traffic filtering, rate limiting, CDN usage, DDoS protection services"
    },
    {
      icon: Shield,
      name: "Malware & Ransomware",
      description: "Malicious software designed to damage, disrupt, or gain unauthorized access to systems. Ransomware encrypts data and demands payment.",
      impact: "Data loss, system corruption, financial extortion, operational disruption",
      prevention: "Antivirus software, regular backups, user awareness, patch management"
    }
  ];

  const services = [
    {
      title: "Vulnerability Assessment",
      description: "Comprehensive scanning and testing to identify security weaknesses in your web applications and infrastructure."
    },
    {
      title: "Penetration Testing",
      description: "Simulated cyber attacks to evaluate the security of your systems and identify exploitable vulnerabilities."
    },
    {
      title: "Security Audit",
      description: "Detailed analysis of your security policies, configurations, and implementation to ensure compliance and best practices."
    },
    {
      title: "Threat Analysis",
      description: "Monitoring and analysis of potential threats specific to your organization and industry sector."
    },
    {
      title: "Security Training",
      description: "Employee awareness programs to educate staff about common cyber threats and security best practices."
    },
    {
      title: "Incident Response",
      description: "Rapid response services to contain, investigate, and remediate security incidents when they occur."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-6 text-center">
          <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cyber Attack Information</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Understanding common cyber threats and how to protect your digital assets
          </p>
        </div>
      </section>

      {/* Common Attacks Section */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Common Cyber Attacks</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {attacks.map((attack, index) => (
              <div
                key={index}
                className="p-6 bg-secondary/50 border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <attack.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{attack.name}</h3>
                <p className="text-muted-foreground mb-4">{attack.description}</p>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-semibold text-destructive">Impact: </span>
                    <span className="text-sm text-muted-foreground">{attack.impact}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-primary">Prevention: </span>
                    <span className="text-sm text-muted-foreground">{attack.prevention}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Our Security Services</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Professional security testing and consultation services to protect your applications
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-secondary/50 border border-border rounded-lg hover:bg-secondary transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Security Testing?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a comprehensive security assessment of your web application
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Request Security Testing
            </Link>
            <Link
              to="/"
              className="px-8 py-3 bg-secondary text-foreground rounded-lg border border-border hover:bg-secondary/80 transition-colors font-semibold"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CyberAttacks;
