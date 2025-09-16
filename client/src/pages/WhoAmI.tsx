import { Award, Users, Coffee, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import profileImageUrl from "@assets/generated_images/Professional_portfolio_headshot_42eb62b4.png";

export default function WhoAmI() {
  const milestones = [
    {
      year: "2018",
      title: "Started My Journey",
      description: "Began my professional career in web development with a focus on secure coding practices."
    },
    {
      year: "2020",
      title: "Security Specialization",
      description: "Specialized in cybersecurity and penetration testing, helping businesses protect their digital assets."
    },
    {
      year: "2022",
      title: "Full-Stack Excellence",
      description: "Expanded expertise to include modern full-stack development and cloud architecture."
    },
    {
      year: "2023",
      title: "Marketing Integration",
      description: "Added marketing automation and SEO expertise to provide comprehensive digital solutions."
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Recognized as a leading expert in web security and digital transformation."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Committed to helping businesses build secure, scalable, and successful digital presences."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Delivering top-tier solutions that exceed expectations and drive measurable results."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Building lasting partnerships through transparent communication and collaborative approach."
    },
    {
      icon: Coffee,
      title: "Continuous Learning",
      description: "Staying ahead of industry trends and technologies to provide cutting-edge solutions."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm mb-6">
                About Me
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Transforming Ideas Into 
                <span className="text-accent"> Digital Reality</span>
              </h1>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hi, I'm Muhammad Irshad Khan, a passionate Web Security and Development Specialist 
                  with over 5 years of experience in creating secure, scalable digital solutions.
                </p>
                <p>
                  My journey began with a simple mission: to bridge the gap between cutting-edge 
                  technology and business success. Today, I help organizations worldwide protect 
                  their digital assets while building robust applications that drive growth.
                </p>
                <p>
                  When I'm not securing applications or optimizing websites, you'll find me 
                  exploring the latest in AI, contributing to open-source projects, or sharing 
                  knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden bg-card shadow-2xl">
                  <img 
                    src={profileImageUrl} 
                    alt="Muhammad Irshad Khan" 
                    className="w-full h-full object-cover"
                    data-testid="img-about-profile"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-accent rounded-2xl flex items-center justify-center shadow-xl">
                  <Coffee className="h-8 w-8 text-accent-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">My Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide every project I undertake and every solution I deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-elevate transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">My Professional Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones that shaped my expertise and approach to digital solutions.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background z-10" />

                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'ml-auto pl-8'}`}>
                    <Card className="hover-elevate transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-accent mb-2" data-testid={`text-year-${milestone.year}`}>
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-card-foreground mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2" data-testid="stat-projects-completed">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2" data-testid="stat-satisfied-clients">25+</div>
              <div className="text-muted-foreground">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2" data-testid="stat-years-experience">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2" data-testid="stat-technologies-mastered">20+</div>
              <div className="text-muted-foreground">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}