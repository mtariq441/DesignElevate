import { Link } from "wouter";
import { Home, Search, ArrowLeft, Shield, Code, TrendingUp, Zap, PenTool, BookOpen, Mail, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function NotFound() {
  const quickLinks = [
    { title: "Home", href: "/", icon: Home, description: "Return to homepage" },
    { title: "Who Am I", href: "/who-am-i", icon: Search, description: "Learn about my journey" },
    { title: "Expertise Hub", href: "/expertise", icon: Lightbulb, description: "Explore my services" },
    { title: "Blog", href: "/blog", icon: BookOpen, description: "Read latest insights" },
    { title: "Contact", href: "/contact", icon: Mail, description: "Get in touch" },
  ];

  const expertiseLinks = [
    { title: "Web Security", href: "/expertise/web-security", icon: Shield, color: "bg-red-500/10 text-red-600" },
    { title: "Web Development", href: "/expertise/web-development", icon: Code, color: "bg-blue-500/10 text-blue-600" },
    { title: "SEO Services", href: "/expertise/seo", icon: TrendingUp, color: "bg-green-500/10 text-green-600" },
    { title: "Marketing Automation", href: "/expertise/marketing-automation", icon: Zap, color: "bg-yellow-500/10 text-yellow-600" },
    { title: "Copywriting", href: "/expertise/copywriting", icon: PenTool, color: "bg-purple-500/10 text-purple-600" },
  ];

  const featuredContent = [
    {
      title: "Advanced Web Security Guide",
      description: "Complete guide to protecting your digital assets",
      href: "/blog/advanced-web-security-2025",
      category: "Security"
    },
    {
      title: "AI-Powered SEO Strategies", 
      description: "Leverage AI tools for better search rankings",
      href: "/blog/ai-powered-seo-future",
      category: "SEO"
    },
    {
      title: "Marketing Automation Success",
      description: "Scale your business with smart automation",
      href: "/blog/marketing-automation-scaling-growth", 
      category: "Marketing"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* 404 Visual */}
          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-bold text-accent/20 mb-4">404</div>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          </div>

          {/* Content */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Oops! Page Not Found
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            The page you're looking for seems to have vanished into the digital void. 
            But don't worry - there's plenty of valuable content waiting for you!
          </p>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/">
              <Button size="lg" data-testid="button-home">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => window.history.back()}
              data-testid="button-back"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation Options */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Main Pages */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Explore My Work</h2>
              <div className="space-y-4">
                {quickLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <Card className="hover-elevate transition-all duration-300 cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                            <link.icon className="h-6 w-6 text-accent" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-card-foreground">{link.title}</h3>
                            <p className="text-muted-foreground text-sm">{link.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Expertise Areas */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">My Expertise</h2>
              <div className="space-y-4">
                {expertiseLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <Card className="hover-elevate transition-all duration-300 cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${link.color}`}>
                            <link.icon className="h-5 w-5" />
                          </div>
                          <span className="font-medium text-card-foreground">{link.title}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Content</h2>
            <p className="text-muted-foreground">
              Popular articles and insights that might interest you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredContent.map((content, index) => (
              <Link key={index} href={content.href}>
                <Card className="h-full hover-elevate transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {content.category}
                    </Badge>
                    <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2">
                      {content.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {content.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Still Can't Find What You're Looking For?</h2>
          <p className="text-muted-foreground mb-8">
            I'm here to help! Get in touch and I'll make sure you find exactly what you need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" data-testid="button-contact-help">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline" size="lg" data-testid="button-browse-blog">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse Blog
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}