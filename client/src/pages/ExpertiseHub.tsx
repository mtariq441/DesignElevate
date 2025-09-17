import { ArrowRight, Shield, Code, TrendingUp, Zap, PenTool, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import ExpertiseCard from "@/components/ExpertiseCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import webSecurityImg from "@assets/generated_images/Web_security_illustration_dd7c81da.png";
import webDevImg from "@assets/generated_images/Web_development_illustration_a68ada74.png";

export default function ExpertiseHub() {
  const expertiseAreas = [
    {
      title: "Web Security Specialist",
      description: "Comprehensive security solutions to protect your digital assets from evolving cyber threats through advanced testing and monitoring.",
      icon: Shield,
      imageSrc: webSecurityImg,
      href: "/expertise/web-security",
      features: [
        "Penetration Testing & Vulnerability Assessment",
        "Security Auditing & Compliance Management", 
        "Incident Response & Threat Analysis",
        "Secure Code Review & Architecture Design"
      ]
    },
    {
      title: "Web Development Specialist",
      description: "Modern, scalable web applications built with cutting-edge technologies and optimized for performance, security, and user experience.",
      icon: Code,
      imageSrc: webDevImg,
      href: "/expertise/web-development",
      features: [
        "Full-Stack Development (React, Node.js, TypeScript)",
        "API Development & Third-party Integrations",
        "Database Design & Performance Optimization",
        "Cloud Deployment & DevOps Automation"
      ]
    },
    {
      title: "SEO Specialist",
      description: "Data-driven SEO strategies that increase organic visibility, drive qualified traffic, and improve search engine rankings.",
      icon: TrendingUp,
      href: "/expertise/seo",
      features: [
        "Technical SEO & Core Web Vitals Optimization",
        "Keyword Research & Content Strategy Development",
        "Local SEO & Google Business Profile Management",
        "Analytics Setup & Performance Tracking"
      ]
    },
    {
      title: "Marketing Automation Specialist",
      description: "Intelligent automation workflows that nurture leads, increase conversions, and streamline your marketing processes.",
      icon: Zap,
      href: "/expertise/marketing-automation",
      features: [
        "Email Marketing Campaigns & Drip Sequences",
        "Lead Scoring & Customer Journey Mapping",
        "CRM Integration & Sales Funnel Optimization",
        "Conversion Rate Optimization & A/B Testing"
      ]
    },
    {
      title: "Copywriting Specialist",
      description: "Compelling, conversion-focused copy that resonates with your audience and drives measurable business results.",
      icon: PenTool,
      href: "/expertise/copywriting",
      features: [
        "Website Copy & High-Converting Landing Pages",
        "Email Marketing Content & Sales Sequences",
        "Product Descriptions & Sales Copy",
        "Blog Content & SEO-Optimized Articles"
      ]
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Projects Completed",
      description: "Successful implementations across various industries"
    },
    {
      icon: Award,
      number: "25+",
      label: "Satisfied Clients",
      description: "Long-term partnerships built on trust and results"
    },
    {
      icon: CheckCircle,
      number: "99%",
      label: "Success Rate",
      description: "Consistent delivery of high-quality solutions"
    },
    {
      icon: TrendingUp,
      number: "5+",
      label: "Years Experience",
      description: "Deep expertise in modern web technologies"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm mb-6">
            My Expertise
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Comprehensive Digital
            <span className="text-accent"> Expertise</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            I specialize in multiple areas of digital growth, offering end-to-end solutions 
            that secure, develop, and optimize your online presence for maximum impact and success.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="text-4xl font-bold text-accent mb-2" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  {stat.number}
                </div>
                <div className="font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Areas of Specialization</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each area represents years of focused expertise and proven results. 
              Click on any specialization to learn more about specific services and case studies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <ExpertiseCard key={index} {...area} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">How I Work</h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology that ensures successful project delivery and long-term results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover-elevate transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">01</span>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  Discovery & Analysis
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I begin every project with thorough research, understanding your business goals, 
                  target audience, and technical requirements to create a tailored strategy.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-accent">02</span>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  Implementation & Testing
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Using best practices and cutting-edge technologies, I build and rigorously test 
                  solutions to ensure they meet quality standards and performance requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-secondary-foreground">03</span>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  Launch & Optimization
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I provide ongoing support, monitoring, and optimization to ensure your solution 
                  continues to deliver value and adapts to changing business needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Let's discuss your project and create a customized solution that delivers 
            the results you're looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="secondary"
                className="px-8 py-3 text-lg"
                data-testid="button-start-project"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/who-am-i">
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-3 text-lg border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="button-learn-more"
              >
                Learn More About Me
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}