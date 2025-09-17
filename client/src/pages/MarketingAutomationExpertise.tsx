import { ArrowRight, Zap, Mail, Users, BarChart3, CheckCircle, Workflow, Target, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MarketingAutomationExpertise() {
  const services = [
    {
      icon: Mail,
      title: "Email Marketing Automation",
      description: "Sophisticated email campaigns that nurture leads and drive conversions through personalized messaging.",
      features: ["Drip Campaign Setup", "Behavioral Triggers", "A/B Testing", "Personalization Engines"]
    },
    {
      icon: Users,
      title: "Lead Scoring & Nurturing",
      description: "Intelligent lead scoring systems that identify high-value prospects and automate nurturing sequences.",
      features: ["Lead Scoring Models", "Progressive Profiling", "Lifecycle Marketing", "Sales Handoff Automation"]
    },
    {
      icon: Workflow,
      title: "Customer Journey Mapping",
      description: "Complete customer journey automation from awareness to advocacy with strategic touchpoints.",
      features: ["Journey Mapping", "Multi-channel Campaigns", "Customer Segmentation", "Retention Automation"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Optimization",
      description: "Advanced analytics and continuous optimization to maximize campaign performance and ROI.",
      features: ["Performance Analytics", "Conversion Tracking", "ROI Measurement", "Campaign Optimization"]
    }
  ];

  const platforms = [
    { name: "HubSpot", category: "All-in-One CRM" },
    { name: "Mailchimp", category: "Email Marketing" },
    { name: "ActiveCampaign", category: "Marketing Automation" },
    { name: "Salesforce", category: "Enterprise CRM" },
    { name: "Klaviyo", category: "E-commerce Marketing" },
    { name: "ConvertKit", category: "Creator Marketing" },
    { name: "Zapier", category: "Workflow Automation" },
    { name: "Pipedrive", category: "Sales Pipeline" }
  ];

  const caseStudies = [
    {
      title: "SaaS Lead Nurturing Campaign",
      challenge: "B2B SaaS company with 40% lead drop-off rate and long sales cycles",
      solution: "Multi-touch email sequences, lead scoring, and sales automation integration",
      results: ["65% increase in SQL conversion", "30% reduction in sales cycle", "200% improvement in lead engagement"],
      industry: "SaaS",
      timeline: "4 months",
      metrics: {
        sqlConversion: "+65%",
        salesCycle: "-30%",
        engagement: "+200%"
      }
    },
    {
      title: "E-commerce Cart Recovery System",
      challenge: "Online retailer losing 70% of potential sales due to cart abandonment",
      solution: "Automated cart recovery sequences, product recommendations, and behavioral triggers",
      results: ["45% cart recovery rate", "$2.8M additional revenue", "25% increase in customer LTV"],
      industry: "E-commerce",
      timeline: "3 months",
      metrics: {
        recovery: "45%",
        revenue: "$2.8M",
        ltv: "+25%"
      }
    }
  ];

  const automationTypes = [
    {
      icon: Target,
      title: "Welcome Series",
      description: "Onboard new subscribers with educational content and brand introduction"
    },
    {
      icon: Mail,
      title: "Abandoned Cart",
      description: "Recover lost sales with strategic reminder sequences and incentives"
    },
    {
      icon: Users,
      title: "Lead Nurturing",
      description: "Guide prospects through the buyer's journey with relevant content"
    },
    {
      icon: TrendingUp,
      title: "Re-engagement",
      description: "Win back inactive customers with targeted campaigns and special offers"
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
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <span className="px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm">
                  Marketing Automation Specialist
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Automate Your
                <span className="text-accent"> Marketing Success</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Intelligent marketing automation that nurtures leads, increases conversions, and grows your business 
                through personalized customer journeys and data-driven optimization.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact">
                  <Button size="lg" data-testid="button-automation-consultation">
                    Get Automation Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" data-testid="button-view-automation-results">
                  View Results
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-bold text-accent" data-testid="stat-conversion-increase">65%</div>
                  <div className="text-sm text-muted-foreground">Avg. Conversion Increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent" data-testid="stat-campaigns-automated">100+</div>
                  <div className="text-sm text-muted-foreground">Campaigns Automated</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent" data-testid="stat-time-saved">80%</div>
                  <div className="text-sm text-muted-foreground">Time Saved</div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-96 h-80 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm border border-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <Zap className="h-20 w-20 text-accent mx-auto" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-accent-foreground">AI</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-accent mb-2">Smart Automation</div>
                    <div className="text-muted-foreground">Intelligent Workflows</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-xl">
                  <Workflow className="h-8 w-8 text-accent-foreground" />
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
            <h2 className="text-4xl font-bold text-foreground mb-6">Automation Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive marketing automation solutions that streamline your marketing processes 
              and deliver personalized experiences at scale.
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

      {/* Automation Types */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Popular Automation Workflows</h2>
            <p className="text-xl text-muted-foreground">
              Essential automation sequences that drive engagement and conversions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationTypes.map((type, index) => (
              <Card key={index} className="text-center hover-elevate transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <type.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-3">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {type.description}
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
            <h2 className="text-4xl font-bold text-foreground mb-6">Automation Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Real results from strategic marketing automation implementations.
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
                      <div className="text-lg font-bold text-accent">{study.metrics.sqlConversion || study.metrics.recovery}</div>
                      <div className="text-xs text-muted-foreground">{study.metrics.sqlConversion ? 'SQL Conv.' : 'Recovery'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-accent">{study.metrics.salesCycle || study.metrics.revenue}</div>
                      <div className="text-xs text-muted-foreground">{study.metrics.salesCycle ? 'Sales Cycle' : 'Revenue'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-accent">{study.metrics.engagement || study.metrics.ltv}</div>
                      <div className="text-xs text-muted-foreground">{study.metrics.engagement ? 'Engagement' : 'LTV'}</div>
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

      {/* Platforms & Tools */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Platforms & Tools</h2>
            <p className="text-xl text-muted-foreground">
              Expert proficiency across leading marketing automation and CRM platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">{platform.name}</h3>
                  <p className="text-sm text-muted-foreground">{platform.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Implementation Process</h2>
            <p className="text-xl text-muted-foreground">
              A strategic approach to marketing automation that ensures seamless integration and optimal performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">01</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Strategy & Planning</h3>
                <p className="text-muted-foreground text-sm">
                  Business goals assessment, customer journey mapping, and automation strategy development.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">02</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Platform Setup</h3>
                <p className="text-muted-foreground text-sm">
                  CRM configuration, integration setup, and data migration from existing systems.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-secondary-foreground">03</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Campaign Creation</h3>
                <p className="text-muted-foreground text-sm">
                  Automation workflow setup, email template creation, and lead scoring implementation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-muted/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">04</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Testing & Optimization</h3>
                <p className="text-muted-foreground text-sm">
                  A/B testing, performance monitoring, and continuous optimization for better results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Marketing?</h2>
          <p className="text-xl mb-8 opacity-90">
            Stop managing campaigns manually. Let's build intelligent automation workflows 
            that nurture leads and drive conversions while you focus on growing your business.
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-3 text-lg"
              data-testid="button-start-automation-project"
            >
              Start Automation Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}