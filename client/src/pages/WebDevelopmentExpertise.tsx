import { ArrowRight, Code, Layers, Zap, Globe, CheckCircle, Monitor, Smartphone, Cloud } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import webDevImg from "@assets/generated_images/Web_development_illustration_a68ada74.png";

export default function WebDevelopmentExpertise() {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "End-to-end web application development using modern technologies and best practices.",
      technologies: ["React/Next.js", "Node.js/Express", "TypeScript", "PostgreSQL/MongoDB"]
    },
    {
      icon: Layers,
      title: "API Development & Integration",
      description: "Robust API development and seamless third-party service integrations.",
      technologies: ["RESTful APIs", "GraphQL", "Third-party APIs", "Microservices"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed optimization and performance tuning for better user experience and SEO.",
      technologies: ["Core Web Vitals", "Code Splitting", "Caching Strategies", "CDN Integration"]
    },
    {
      icon: Cloud,
      title: "Cloud Deployment & DevOps",
      description: "Scalable cloud infrastructure setup with automated deployment pipelines.",
      technologies: ["AWS/Google Cloud", "Docker/Kubernetes", "CI/CD", "Infrastructure as Code"]
    }
  ];

  const techStack = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"],
    backend: ["Node.js", "Express", "Python", "Django", "FastAPI", "GraphQL"],
    database: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Supabase", "Firebase"],
    cloud: ["AWS", "Google Cloud", "Vercel", "Netlify", "DigitalOcean", "Docker"]
  };

  const projects = [
    {
      title: "E-commerce Platform Modernization",
      description: "Complete rebuild of legacy e-commerce platform with modern tech stack",
      challenge: "Outdated PHP/MySQL system with poor performance and security issues",
      solution: "React/Next.js frontend with Node.js API and PostgreSQL database on AWS",
      results: ["300% faster page load times", "99.9% uptime improvement", "50% increase in conversions"],
      technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Stripe"],
      timeline: "4 months"
    },
    {
      title: "SaaS Dashboard Development",
      description: "Complex analytics dashboard for B2B SaaS application",
      challenge: "Real-time data visualization with complex user permissions",
      solution: "React dashboard with real-time WebSocket connections and role-based access",
      results: ["Real-time updates for 10K+ users", "Advanced role-based permissions", "Mobile-responsive design"],
      technologies: ["React", "TypeScript", "WebSockets", "D3.js", "Node.js"],
      timeline: "6 months"
    }
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
                  <Code className="h-6 w-6 text-accent" />
                </div>
                <span className="px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm">
                  Web Development Specialist
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Building Modern
                <span className="text-accent"> Web Applications</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Creating scalable, secure, and high-performance web applications using cutting-edge 
                technologies and industry best practices. From concept to deployment, I deliver 
                solutions that drive business growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact">
                  <Button size="lg" data-testid="button-start-project">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" data-testid="button-view-portfolio">
                  View Portfolio
                </Button>
              </div>

              {/* Development Focus Areas */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <Monitor className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-sm font-medium">Desktop</div>
                </div>
                <div className="text-center">
                  <Smartphone className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-sm font-medium">Mobile</div>
                </div>
                <div className="text-center">
                  <Globe className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-sm font-medium">Web</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-96 h-80 rounded-2xl overflow-hidden bg-card shadow-2xl">
                  <img 
                    src={webDevImg} 
                    alt="Web Development Illustration" 
                    className="w-full h-full object-cover"
                    data-testid="img-development-hero"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-xl">
                  <Code className="h-8 w-8 text-accent-foreground" />
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
            <h2 className="text-4xl font-bold text-foreground mb-6">Development Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive web development solutions covering everything from frontend interfaces 
              to backend systems and cloud infrastructure.
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
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Technology Stack</h2>
            <p className="text-xl text-muted-foreground">
              I work with modern, proven technologies to build scalable and maintainable applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-4">Frontend</h3>
                <div className="space-y-2">
                  {techStack.frontend.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-4">Backend</h3>
                <div className="space-y-2">
                  {techStack.backend.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-4">Database</h3>
                <div className="space-y-2">
                  {techStack.database.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-4">Cloud & DevOps</h3>
                <div className="space-y-2">
                  {techStack.cloud.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Showcases */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              Real-world applications showcasing technical expertise and problem-solving capabilities.
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-2xl font-semibold text-card-foreground">
                          {project.title}
                        </h3>
                        <Badge variant="outline">{project.timeline}</Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-6">{project.description}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-foreground mb-2">Challenge:</h4>
                          <p className="text-muted-foreground text-sm">{project.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-foreground mb-2">Solution:</h4>
                          <p className="text-muted-foreground text-sm">{project.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-foreground mb-2">Results:</h4>
                          <ul className="space-y-1">
                            {project.results.map((result, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                                <span className="text-muted-foreground text-sm">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-4">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Development Process</h2>
            <p className="text-xl text-muted-foreground">
              A structured approach that ensures quality, timeline adherence, and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">01</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Discovery & Planning</h3>
                <p className="text-muted-foreground text-sm">
                  Requirements gathering, technical architecture design, and project timeline creation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">02</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Design & Prototyping</h3>
                <p className="text-muted-foreground text-sm">
                  UI/UX design, interactive prototypes, and client feedback incorporation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-secondary-foreground">03</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Development & Testing</h3>
                <p className="text-muted-foreground text-sm">
                  Agile development with continuous integration, testing, and code reviews.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-muted/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">04</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Deployment & Support</h3>
                <p className="text-muted-foreground text-sm">
                  Production deployment, performance monitoring, and ongoing maintenance support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Next Application?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your project requirements and create a custom solution that 
            meets your business objectives and technical needs.
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-3 text-lg"
              data-testid="button-discuss-project"
            >
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}