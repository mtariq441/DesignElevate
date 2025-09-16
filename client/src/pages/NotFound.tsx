import { Link } from "wouter";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  const quickLinks = [
    { title: "Home", href: "/", icon: Home },
    { title: "Who Am I", href: "/who-am-i", icon: Search },
    { title: "Expertise", href: "/expertise", icon: Search },
    { title: "Blog", href: "/blog", icon: Search },
    { title: "Contact", href: "/contact", icon: Search },
  ];

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Visual */}
        <div className="mb-8">
          <div className="text-8xl md:text-9xl font-bold text-accent/20 mb-4">404</div>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
        </div>

        {/* Content */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Page Not Found
        </h1>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track with some helpful links.
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

        {/* Quick Links */}
        <Card className="text-left">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold text-card-foreground mb-6 text-center">
              Popular Pages
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start hover-elevate"
                    data-testid={`link-${link.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <link.icon className="mr-3 h-4 w-4" />
                    {link.title}
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Help Text */}
        <div className="mt-12 text-sm text-muted-foreground">
          <p>
            If you believe this is an error or need assistance, please{" "}
            <Link href="/contact">
              <Button
                variant="ghost"
                className="p-0 h-auto text-accent hover:text-accent/80"
                data-testid="link-contact-help"
              >
                contact me
              </Button>
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}