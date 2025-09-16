import TimelineItem from "@/components/TimelineItem";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function Education() {
  // TODO: Remove mock education data when implementing real content management
  const educationItems = [
    {
      title: "Master of Computer Science",
      organization: "University of Technology",
      period: "2018 - 2020",
      location: "Islamabad, Pakistan",
      description: "Specialized in Cybersecurity and Web Development with focus on advanced security protocols, penetration testing, and secure application development. Graduated with distinction and completed thesis on 'Modern Web Application Security Frameworks'.",
      type: "education" as const,
      status: "completed" as const
    },
    {
      title: "Bachelor of Software Engineering",
      organization: "National University of Sciences & Technology",
      period: "2014 - 2018",
      location: "Islamabad, Pakistan",
      description: "Comprehensive foundation in software engineering principles, algorithms, and system design. Led multiple team projects and maintained a 3.8 GPA throughout the program.",
      type: "education" as const,
      status: "completed" as const
    },
    {
      title: "Google Cloud Professional Cloud Architect",
      organization: "Google Cloud",
      period: "2023",
      description: "Achieved professional certification in designing and implementing Google Cloud solutions with emphasis on security, scalability, and reliability. Covers advanced cloud architecture, DevOps practices, and enterprise-grade solutions.",
      type: "certification" as const,
      status: "completed" as const
    },
    {
      title: "AWS Certified Security - Specialty",
      organization: "Amazon Web Services",
      period: "2023",
      description: "Advanced certification focusing on AWS security services, incident response, logging and monitoring, infrastructure security, and compliance validation in cloud environments.",
      type: "certification" as const,
      status: "completed" as const
    },
    {
      title: "Certified Ethical Hacker (CEH)",
      organization: "EC-Council",
      period: "2022",
      description: "Comprehensive certification in ethical hacking methodologies, penetration testing techniques, and vulnerability assessment tools. Covers network security, web application security, and social engineering.",
      type: "certification" as const,
      status: "completed" as const
    },
    {
      title: "HubSpot Content Marketing Certification",
      organization: "HubSpot Academy",
      period: "2024",
      description: "Completed comprehensive training in content marketing strategies, inbound marketing, SEO best practices, and marketing automation. Focus on creating engaging content that drives conversions.",
      type: "certification" as const,
      status: "completed" as const
    },
    {
      title: "React Advanced Patterns Workshop",
      organization: "Frontend Masters",
      period: "2024",
      description: "Intensive workshop covering advanced React patterns, performance optimization, state management, and modern development practices. Currently implementing learned concepts in production applications.",
      type: "certification" as const,
      status: "current" as const
    },
    {
      title: "AI/ML Security Training Program",
      organization: "Stanford Online",
      period: "2024 - Present",
      location: "Remote",
      description: "Ongoing professional development in AI/ML security, focusing on securing machine learning models, AI ethics, and emerging threats in AI-powered applications.",
      type: "education" as const,
      status: "current" as const
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm mb-6">
            Education & Certifications
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Continuous Learning &
            <span className="text-accent"> Professional Growth</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            My commitment to excellence is reflected in my continuous pursuit of knowledge, 
            advanced certifications, and staying ahead of industry trends.
          </p>
        </div>
      </section>

      {/* Education Stats */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-degrees">2</div>
              <div className="text-muted-foreground">Advanced Degrees</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-certifications">6+</div>
              <div className="text-muted-foreground">Professional Certifications</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-hours">500+</div>
              <div className="text-muted-foreground">Hours of Training</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Educational Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From foundational education to cutting-edge certifications, here's my path of continuous learning and professional development.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {educationItems.map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
                isLast={index === educationItems.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Technical Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I've mastered through formal education and professional experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Security</h3>
              <div className="space-y-2">
                {["Penetration Testing", "Vulnerability Assessment", "OWASP Top 10", "Security Auditing", "Incident Response"].map((skill) => (
                  <div key={skill} className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Development</h3>
              <div className="space-y-2">
                {["React/Next.js", "Node.js/Express", "TypeScript", "Python", "PostgreSQL"].map((skill) => (
                  <div key={skill} className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Cloud & DevOps</h3>
              <div className="space-y-2">
                {["AWS/Google Cloud", "Docker/Kubernetes", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring"].map((skill) => (
                  <div key={skill} className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Marketing</h3>
              <div className="space-y-2">
                {["SEO/SEM", "Content Marketing", "Marketing Automation", "Analytics", "Conversion Optimization"].map((skill) => (
                  <div key={skill} className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}