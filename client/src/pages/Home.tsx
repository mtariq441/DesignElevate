import { useEffect } from "react";
import { ArrowRight, Shield, Code, TrendingUp, Zap, PenTool } from "lucide-react";
import { Link } from "wouter";
import HeroSection from "@/components/HeroSection";
import ExpertiseCard from "@/components/ExpertiseCard";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { updatePageSEO, defaultSEO } from "@/utils/seo";
import webSecurityImg from "@assets/generated_images/Web_security_illustration_dd7c81da.png";
import webDevImg from "@assets/generated_images/Web_development_illustration_a68ada74.png";

export default function Home() {
  useEffect(() => {
    updatePageSEO(defaultSEO);
  }, []);

  // TODO: Remove mock data when implementing real content management
  const expertiseItems = [
    {
      title: "Web Security Specialist",
      description: "Protecting your digital assets with advanced security measures, vulnerability assessments, and comprehensive penetration testing.",
      icon: Shield,
      imageSrc: webSecurityImg,
      href: "/expertise/web-security",
      features: [
        "Penetration Testing & Vulnerability Assessment",
        "Security Auditing & Compliance Management", 
        "Incident Response & Threat Analysis",
        "Secure Code Review & Architecture"
      ]
    },
    {
      title: "Web Development Specialist",
      description: "Building modern, scalable web applications with cutting-edge technologies and best practices for optimal performance.",
      icon: Code,
      imageSrc: webDevImg,
      href: "/expertise/web-development",
      features: [
        "Full-Stack Development (React, Node.js)",
        "API Development & Integration",
        "Database Design & Optimization",
        "Performance Tuning & Scaling"
      ]
    },
    {
      title: "SEO Specialist",
      description: "Driving organic traffic and improving search rankings through strategic SEO optimization and content marketing.",
      icon: TrendingUp,
      href: "/expertise/seo",
      features: [
        "Technical SEO & Site Optimization",
        "Keyword Research & Content Strategy",
        "Local SEO & Google My Business",
        "Analytics & Performance Tracking"
      ]
    },
    {
      title: "Marketing Automation",
      description: "Streamlining your marketing processes with intelligent automation workflows and lead nurturing systems.",
      icon: Zap,
      href: "/expertise/marketing-automation",
      features: [
        "Email Marketing Campaigns",
        "Lead Scoring & Nurturing",
        "CRM Integration & Management",
        "Conversion Rate Optimization"
      ]
    },
    {
      title: "Copywriting Specialist",
      description: "Creating compelling, conversion-focused copy that resonates with your audience and drives business results.",
      icon: PenTool,
      href: "/expertise/copywriting",
      features: [
        "Website Copy & Landing Pages",
        "Email Marketing Content",
        "Sales Copy & Product Descriptions",
        "Blog Content & SEO Writing"
      ]
    }
  ];

  const latestBlogs = [
    {
      title: "Advanced Web Security: Protecting Your Digital Assets in 2025",
      excerpt: "Explore the latest security threats and learn how to implement robust protection strategies for your web applications and digital infrastructure.",
      category: "Web Security",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      href: "/blog/advanced-web-security-2025"
    },
    {
      title: "AI-Powered SEO: The Future of Search Optimization",
      excerpt: "Discover how artificial intelligence is revolutionizing SEO strategies and learn to leverage AI tools for better search rankings.",
      category: "AI SEO",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      href: "/blog/ai-powered-seo-future"
    },
    {
      title: "Marketing Automation: Scaling Your Business Growth",
      excerpt: "Learn how to implement effective marketing automation strategies that drive engagement, nurture leads, and accelerate business growth.",
      category: "Marketing Automation",
      date: "Dec 8, 2024",
      readTime: "10 min read",
      href: "/blog/marketing-automation-scaling-growth"
    }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Expertise Highlights */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm mb-4">
              My Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From securing your applications to optimizing your online presence, 
              I provide end-to-end digital transformation services.
            </p>
          </div>

          {/* Expertise Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {expertiseItems.map((item, index) => (
              <ExpertiseCard key={index} {...item} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link href="/expertise">
              <Button 
                size="lg" 
                data-testid="button-view-all-expertise"
              >
                View All Expertise
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm mb-4">
              Latest Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Knowledge & Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest trends, best practices, and insights from the world of 
              web security, development, and digital marketing.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {latestBlogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link href="/blog">
              <Button 
                variant="outline" 
                size="lg"
                data-testid="button-view-all-blogs"
              >
                View All Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Ready to transform your digital presence? Let's discuss how I can help secure, 
            develop, and optimize your online business for maximum impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="secondary"
                className="px-8 py-3 text-lg"
                data-testid="button-get-started"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/expertise">
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-3 text-lg border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="button-view-portfolio"
              >
                View My Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}