import { ArrowRight, PenTool, FileText, TrendingUp, Target, CheckCircle, Lightbulb, Users, Award } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CopywritingExpertise() {
  const services = [
    {
      icon: FileText,
      title: "Website Copy & Landing Pages",
      description: "Compelling website copy and high-converting landing pages that communicate value and drive action.",
      features: ["Homepage Copy", "Landing Page Optimization", "About Page Storytelling", "Product Descriptions"]
    },
    {
      icon: Target,
      title: "Sales Copy & Conversions",
      description: "Persuasive sales copy that addresses objections and guides prospects toward purchase decisions.",
      features: ["Sales Pages", "Email Sales Sequences", "Ad Copy Creation", "CTA Optimization"]
    },
    {
      icon: TrendingUp,
      title: "Content Marketing",
      description: "Engaging content that builds authority, educates audiences, and supports SEO objectives.",
      features: ["Blog Content", "Case Studies", "White Papers", "Social Media Copy"]
    },
    {
      icon: Users,
      title: "Brand Voice & Messaging",
      description: "Consistent brand voice development and messaging strategy across all marketing touchpoints.",
      features: ["Brand Voice Guidelines", "Messaging Framework", "Tone of Voice", "Content Style Guide"]
    }
  ];

  const copyTypes = [
    {
      type: "Web Copy",
      description: "Homepage, about pages, service pages",
      conversionRate: "+85%"
    },
    {
      type: "Email Marketing",
      description: "Newsletters, sequences, promotions",
      conversionRate: "+120%"
    },
    {
      type: "Sales Copy",
      description: "Sales pages, funnels, ad copy",
      conversionRate: "+150%"
    },
    {
      type: "Content Marketing",
      description: "Blogs, articles, case studies",
      conversionRate: "+95%"
    }
  ];

  const caseStudies = [
    {
      title: "SaaS Landing Page Conversion Optimization",
      challenge: "B2B SaaS platform with 2.3% landing page conversion rate and unclear value proposition",
      solution: "Complete copy rewrite focusing on customer pain points, clear value props, and social proof",
      results: ["180% increase in conversion rate", "45% improvement in trial signups", "60% reduction in bounce rate"],
      industry: "SaaS",
      timeline: "6 weeks",
      metrics: {
        conversion: "+180%",
        trials: "+45%",
        bounce: "-60%"
      }
    },
    {
      title: "E-commerce Email Campaign Series",
      challenge: "Online retailer with low email engagement and poor customer retention rates",
      solution: "Strategic email sequence with storytelling, product education, and personalized recommendations",
      results: ["250% increase in email CTR", "90% improvement in customer LTV", "40% boost in repeat purchases"],
      industry: "E-commerce",
      timeline: "8 weeks",
      metrics: {
        ctr: "+250%",
        ltv: "+90%",
        repeats: "+40%"
      }
    }
  ];

  const writingProcess = [
    {
      step: "Research & Discovery",
      description: "Deep dive into your audience, competitors, and market positioning",
      icon: Lightbulb
    },
    {
      step: "Strategy Development",
      description: "Create messaging framework and content strategy aligned with goals",
      icon: Target
    },
    {
      step: "Copy Creation",
      description: "Write compelling copy that resonates with your target audience",
      icon: PenTool
    },
    {
      step: "Testing & Optimization",
      description: "A/B test different versions and optimize for maximum performance",
      icon: TrendingUp
    }
  ];

  const industries = [
    "SaaS & Technology",
    "E-commerce & Retail",
    "Financial Services",
    "Healthcare & Wellness",
    "Professional Services",
    "Real Estate",
    "Education & Training",
    "Non-profit Organizations"
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
                  <PenTool className="h-6 w-6 text-accent" />
                </div>
                <span className="px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm">
                  Copywriting Specialist
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Words That
                <span className="text-accent"> Convert & Persuade</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Strategic copywriting that transforms visitors into customers through compelling messaging, 
                persuasive storytelling, and conversion-focused content that drives measurable business results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact">
                  <Button size="lg" data-testid="button-copy-consultation">
                    Get Copy Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" data-testid="button-view-copy-samples">
                  View Copy Samples
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-bold text-accent" data-testid="stat-conversion-improvement">150%</div>
                  <div className="text-sm text-muted-foreground">Avg. Conversion Boost</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent" data-testid="stat-projects-completed">200+</div>
                  <div className="text-sm text-muted-foreground">Copy Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent" data-testid="stat-client-satisfaction">99%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-96 h-80 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm border border-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <PenTool className="h-20 w-20 text-accent mx-auto mb-4" />
                    <div className="text-2xl font-bold text-accent mb-2">Conversion Copy</div>
                    <div className="text-muted-foreground">That Actually Works</div>
                    <div className="mt-4 flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-accent/60 rounded-full animate-pulse delay-100" />
                      <div className="w-2 h-2 bg-accent/40 rounded-full animate-pulse delay-200" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-xl">
                  <FileText className="h-8 w-8 text-accent-foreground" />
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
            <h2 className="text-4xl font-bold text-foreground mb-6">Copywriting Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive copywriting solutions that communicate your value proposition clearly, 
              build trust with your audience, and drive conversions across all touchpoints.
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

      {/* Copy Performance */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Copy Performance Results</h2>
            <p className="text-xl text-muted-foreground">
              Average conversion improvements across different types of copywriting projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {copyTypes.map((copy, index) => (
              <Card key={index} className="text-center hover-elevate transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-accent mb-2" data-testid={`conversion-${copy.type.toLowerCase().replace(/\s+/g, '-')}`}>
                    {copy.conversionRate}
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {copy.type}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {copy.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Copy Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Real results from strategic copywriting that transforms business performance.
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
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-accent/5 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-accent">{study.metrics.conversion || study.metrics.ctr}</div>
                      <div className="text-xs text-muted-foreground">{study.metrics.conversion ? 'Conversion' : 'CTR'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-accent">{study.metrics.trials || study.metrics.ltv}</div>
                      <div className="text-xs text-muted-foreground">{study.metrics.trials ? 'Trials' : 'LTV'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-accent">{study.metrics.bounce || study.metrics.repeats}</div>
                      <div className="text-xs text-muted-foreground">{study.metrics.bounce ? 'Bounce' : 'Repeats'}</div>
                    </div>
                  </div>
                  
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

      {/* Writing Process */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">My Writing Process</h2>
            <p className="text-xl text-muted-foreground">
              A strategic approach to copywriting that ensures every word serves a purpose.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {writingProcess.map((step, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.step}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Industries I Serve</h2>
            <p className="text-xl text-muted-foreground">
              Specialized copywriting expertise across diverse industries and business types.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">{industry}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Copy?</h2>
          <p className="text-xl mb-8 opacity-90">
            Stop losing potential customers to weak copy. Let's create compelling content 
            that clearly communicates your value and drives conversions.
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-3 text-lg"
              data-testid="button-start-copywriting-project"
            >
              Start Your Copy Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}