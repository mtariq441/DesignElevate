import { ArrowRight, TrendingUp, Search, BarChart3, Target, CheckCircle, Globe, Users, Award } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SEOExpertise() {
  const services = [
    {
      icon: Search,
      title: "Technical SEO Optimization",
      description: "Comprehensive technical SEO audits and optimization for better search engine crawling and indexing.",
      features: ["Core Web Vitals Optimization", "Site Speed Enhancement", "Mobile-First Indexing", "Schema Markup Implementation"]
    },
    {
      icon: Target,
      title: "Keyword Research & Strategy",
      description: "Data-driven keyword research and content strategy to target high-value search terms.",
      features: ["Competitor Analysis", "Search Intent Mapping", "Long-tail Keyword Discovery", "Content Gap Analysis"]
    },
    {
      icon: BarChart3,
      title: "Content Optimization",
      description: "SEO-optimized content creation and existing content enhancement for better rankings.",
      features: ["On-page SEO Optimization", "Content Cluster Strategy", "Featured Snippet Optimization", "E-A-T Enhancement"]
    },
    {
      icon: Globe,
      title: "Local SEO & GMB",
      description: "Local search optimization and Google My Business management for location-based businesses.",
      features: ["Google My Business Optimization", "Local Citation Building", "Review Management", "Local Link Building"]
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Organic Growth Strategy",
      challenge: "Online retailer with 500+ products struggling with organic visibility and traffic",
      solution: "Comprehensive SEO audit, technical optimization, and content marketing strategy implementation",
      results: ["300% increase in organic traffic", "150% improvement in conversion rate", "Top 3 rankings for 25+ target keywords"],
      industry: "E-commerce",
      timeline: "8 months",
      metrics: {
        organicTraffic: "+300%",
        keywords: "25+",
        conversions: "+150%"
      }
    },
    {
      title: "Local Service Business SEO Campaign",
      challenge: "HVAC company with poor local search visibility and limited online presence",
      solution: "Local SEO optimization, Google My Business enhancement, and local content marketing",
      results: ["500% increase in local search visibility", "80+ positive reviews generated", "40% increase in service calls"],
      industry: "Local Services",
      timeline: "6 months",
      metrics: {
        localVisibility: "+500%",
        reviews: "80+",
        serviceCalls: "+40%"
      }
    }
  ];

  const tools = [
    "Google Analytics & Search Console",
    "Ahrefs & SEMrush",
    "Screaming Frog SEO Spider",
    "Google PageSpeed Insights",
    "Schema.org Markup",
    "Yoast SEO & RankMath"
  ];

  const certifications = [
    "Google Analytics Certified",
    "Google Ads Search Certified",
    "HubSpot Content Marketing",
    "Ahrefs SEO Certification"
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
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <span className="px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm">
                  SEO Specialist
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Driving Organic
                <span className="text-accent"> Growth & Visibility</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Strategic SEO optimization that increases organic traffic, improves search rankings, 
                and drives qualified leads through data-driven techniques and proven methodologies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact">
                  <Button size="lg" data-testid="button-get-seo-audit">
                    Get SEO Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" data-testid="button-view-seo-case-studies">
                  View SEO Results
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-bold text-accent" data-testid="stat-traffic-increase">300%</div>
                  <div className="text-sm text-muted-foreground">Avg. Traffic Increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent" data-testid="stat-keywords-ranked">500+</div>
                  <div className="text-sm text-muted-foreground">Keywords Ranked</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent" data-testid="stat-page-one-rankings">95%</div>
                  <div className="text-sm text-muted-foreground">Page 1 Rankings</div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-96 h-80 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm border border-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-24 w-24 text-accent mx-auto mb-4" />
                    <div className="text-4xl font-bold text-accent mb-2">↗ 300%</div>
                    <div className="text-muted-foreground">Organic Growth</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-xl">
                  <Search className="h-8 w-8 text-accent-foreground" />
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
            <h2 className="text-4xl font-bold text-foreground mb-6">SEO Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive SEO solutions designed to improve your search visibility, 
              drive qualified organic traffic, and increase your online authority.
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
            <h2 className="text-4xl font-bold text-foreground mb-6">SEO Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Real results from comprehensive SEO campaigns across various industries.
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
                      <div className="text-lg font-bold text-accent">{study.metrics.organicTraffic}</div>
                      <div className="text-xs text-muted-foreground">Traffic</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-accent">{study.metrics.keywords || study.metrics.reviews}</div>
                      <div className="text-xs text-muted-foreground">{study.metrics.keywords ? 'Keywords' : 'Reviews'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-accent">{study.metrics.conversions || study.metrics.serviceCalls}</div>
                      <div className="text-xs text-muted-foreground">{study.metrics.conversions ? 'Conversions' : 'Service Calls'}</div>
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

      {/* Tools & Certifications */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Tools */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">SEO Tools & Technologies</h2>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg hover-elevate transition-all duration-300">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">SEO Certifications</h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-4 p-6 bg-card rounded-lg border border-card-border hover-elevate transition-all duration-300">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">{cert}</h3>
                      <p className="text-sm text-muted-foreground">Professional Certification</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Process */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">My SEO Process</h2>
            <p className="text-xl text-muted-foreground">
              A systematic approach to SEO that delivers consistent, measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">01</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">SEO Audit & Analysis</h3>
                <p className="text-muted-foreground text-sm">
                  Comprehensive website analysis, competitor research, and keyword opportunity identification.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">02</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Strategy Development</h3>
                <p className="text-muted-foreground text-sm">
                  Custom SEO strategy creation based on business goals, target audience, and market analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-secondary-foreground">03</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Implementation & Optimization</h3>
                <p className="text-muted-foreground text-sm">
                  Technical SEO fixes, content optimization, and on-page improvements implementation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-muted/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">04</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Monitoring & Reporting</h3>
                <p className="text-muted-foreground text-sm">
                  Continuous performance tracking, regular reporting, and strategy refinement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Improve Your Search Rankings?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a comprehensive SEO audit and custom strategy to boost your organic visibility 
            and drive more qualified traffic to your website.
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-3 text-lg"
              data-testid="button-start-seo-project"
            >
              Start Your SEO Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}