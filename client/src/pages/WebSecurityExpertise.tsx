import { ArrowRight, Shield, CheckCircle, AlertTriangle, Lock, Eye, Zap, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import webSecurityImg from "@assets/generated_images/Web_security_illustration_dd7c81da.png";

export default function WebSecurityExpertise() {
  const services = [
    {
      icon: Shield,
      title: "Penetration Testing",
      description: "Comprehensive security testing to identify vulnerabilities before attackers do.",
      features: ["Network Penetration Testing", "Web Application Testing", "API Security Assessment", "Social Engineering Tests"]
    },
    {
      icon: Eye,
      title: "Vulnerability Assessment",
      description: "Systematic evaluation of your security posture with detailed remediation plans.",
      features: ["Automated Vulnerability Scans", "Manual Security Reviews", "Risk Assessment & Prioritization", "Compliance Reporting"]
    },
    {
      icon: Lock,
      title: "Security Auditing",
      description: "In-depth security audits to ensure compliance and identify security gaps.",
      features: ["OWASP Top 10 Compliance", "PCI DSS Assessment", "Security Policy Review", "Access Control Auditing"]
    },
    {
      icon: Zap,
      title: "Incident Response",
      description: "Rapid response and recovery services for security incidents and breaches.",
      features: ["24/7 Incident Response", "Forensic Analysis", "Breach Containment", "Recovery Planning"]
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform Security Overhaul",
      challenge: "Large e-commerce platform with 50K+ daily users experiencing security vulnerabilities",
      solution: "Comprehensive security audit, penetration testing, and implementation of advanced security measures",
      results: ["99.9% reduction in security incidents", "PCI DSS compliance achieved", "Zero data breaches in 2+ years"],
      industry: "E-commerce",
      timeline: "3 months"
    },
    {
      title: "Financial Services Security Assessment",
      challenge: "Regional bank needed comprehensive security evaluation for regulatory compliance",
      solution: "Multi-layered security assessment including network, application, and physical security testing",
      results: ["100% regulatory compliance", "Advanced threat detection implemented", "Security training for 200+ employees"],
      industry: "Financial Services",
      timeline: "6 months"
    }
  ];

  const certifications = [
    "Certified Ethical Hacker (CEH)",
    "AWS Certified Security - Specialty",
    "OWASP Certified Security Professional",
    "CompTIA Security+"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <span className="px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm">
                  Web Security Specialist
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Protecting Your Digital
                <span className="text-accent"> Assets</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Comprehensive security solutions to safeguard your applications, data, and infrastructure 
                from evolving cyber threats through advanced testing, monitoring, and protection strategies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact">
                  <Button size="lg" data-testid="button-get-security-audit">
                    Get Security Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" data-testid="button-view-case-studies">
                  View Case Studies
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-bold text-accent" data-testid="stat-vulnerabilities-found">500+</div>
                  <div className="text-sm text-muted-foreground">Vulnerabilities Found</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent" data-testid="stat-systems-secured">100+</div>
                  <div className="text-sm text-muted-foreground">Systems Secured</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent" data-testid="stat-zero-breaches">0</div>
                  <div className="text-sm text-muted-foreground">Client Breaches</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-96 h-80 rounded-2xl overflow-hidden bg-card shadow-2xl">
                  <img 
                    src={webSecurityImg} 
                    alt="Web Security Illustration" 
                    className="w-full h-full object-cover"
                    data-testid="img-security-hero"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-xl">
                  <CheckCircle className="h-8 w-8 text-accent-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Security Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive security solutions designed to protect your digital assets 
              and ensure business continuity in an ever-evolving threat landscape.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Real-world examples of how my security expertise has protected businesses and their data.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary">{study.industry}</Badge>
                    <Badge variant="outline">{study.timeline}</Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">
                    {study.title}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Challenge:</h4>
                      <p className="text-muted-foreground text-sm">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Solution:</h4>
                      <p className="text-muted-foreground text-sm">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Expertise */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Certifications & Expertise</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Stay current with the latest security practices through continuous learning 
                and industry-recognized certifications.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="h-6 w-6 text-accent" />
                    <h3 className="text-xl font-semibold">Security Assessment Process</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Reconnaissance & Planning</h4>
                        <p className="text-sm text-muted-foreground">Gather information and plan the assessment approach</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-accent">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Vulnerability Discovery</h4>
                        <p className="text-sm text-muted-foreground">Identify security weaknesses and potential attack vectors</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-secondary/50 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-secondary-foreground">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Exploitation & Analysis</h4>
                        <p className="text-sm text-muted-foreground">Test vulnerabilities and assess potential impact</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-muted/50 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Reporting & Remediation</h4>
                        <p className="text-sm text-muted-foreground">Detailed report with actionable remediation steps</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Secure Your Digital Assets Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait for a security incident. Get a comprehensive security assessment 
            and protect your business from cyber threats.
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-3 text-lg"
              data-testid="button-get-started-security"
            >
              Get Started with Security Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}